import { storageFireStore } from '../consts';

export default (editor, opts = {}) => {
    const sm = editor.StorageManager;
    const storageName = storageFireStore;

    let db;
    let doc;
    let collection;
    const { apiKey, authDomain, projectId } = opts;
    const dbSettings = opts.settings;
    const onError = err => sm.onError(storageName, err.code || err);

    const getDoc = () => doc;

    const getAsyncCollection = (clb) => {
        if (collection) return clb(collection);
        // if (!firebase.apps.length) {
        //     firebase.initializeApp({ apiKey, authDomain, projectId, ...opts.firebaseConfig });
        //     db = firebase.firestore();
        //     db.settings(dbSettings);
        // }
        // else {
        //     firebase.app();
        //     db = firebase.firestore();
        //     db.settings(dbSettings);
        // }

        const callback = () => {
            collection = db.collection(opts.objectStoreName);
            clb(collection);
        }

        callback();

        //if (opts.enableOffline) {
        //    db.enablePersistence().then(callback).catch(onError);
        //} else {
        //    callback();
        //}
    };

    const getAsyncDoc = (clb) => {
        getAsyncCollection(cll => {
            const cs = editor.Storage.getCurrentStorage();
            doc = cll.doc(cs.currentIdx);
            clb(doc);
        });
    };

    sm.add(storageName, {
        currentId: 'Default',
        currentIdx: 'uuidv4',
        currentThumbnail: '',
        isTemplate: false,
        getDoc,

        setDocId(id) {
            this.currentIdx = id;
        },

        setId(id) {
            this.currentId = id;
        },

        setIdx(idx) {
            this.currentIdx = idx;
        },

        setThumbnail(thumbnail) {
            this.currentThumbnail = thumbnail;
        },

        setIsTemplate(isTemplate) {
            this.isTemplate = !!isTemplate;
        },

        load(keys, clb, clbError) {
            getAsyncDoc(doc => {
                doc.get()
                    .then(doc => doc.exists && clb(doc.data()))
                    .catch(clbError);
            });
        },

        loadAll(clb, clbError) {
            getAsyncCollection(cll => {
                cll.get()
                    .then(docs => {
                        const data = [];
                        docs.forEach(doc => data.push(doc.data()));
                        clb(data);
                    })
                    .catch(clbError);
            });
        },

        store(data, clb, clbError) {
            getAsyncCollection(cll => {
                cll.doc(data.idx || this.currentIdx).set({
                    idx: this.currentIdx,
                    id: this.currentId,
                    template: this.isTemplate,
                    thumbnail: this.currentThumbnail,
                    ...data
                })
                    .then(clb)
                    .catch(clbError);
            });
        },

        update(data, clb, clbError) {
            const { idx, ..._data } = data;
            getAsyncCollection(cll => {
                cll.doc(idx).set(_data, { merge: true })
                    .then(clb)
                    .catch(clbError);
            });
        },

        delete(clb, clbError, index) {
            if (!index) {
                getAsyncDoc(doc => {
                    doc.delete()
                        .then(clb)
                        .catch(clbError);
                });
            } else {
                getAsyncCollection(cll => {
                    cll.doc(index).delete()
                        .then(clb)
                        .catch(clbError);
                });
            }
        }
    });
}