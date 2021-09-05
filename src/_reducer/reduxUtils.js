// export const editedUpdate = (obj, payload, extraField = null) => {
//   const newObj = obj ? [...obj] : [];

//   const updated = extraField
//     ? [payload, ...deleteFromState(newObj, payload[extraField].id, extraField)]
//     : [payload, ...deleteFromState(newObj, payload.id, extraField)];

//   return updated;
// };

export const editedUpdate = (obj, idDetails, id, extraField = null) => {
  const newObj = obj ? [...obj] : [];

  console.log(id);
  // const idValue = document.querySelector(".valueId");

  let amounts = document.querySelector(".data").innerHTML;
  let quantity = document.querySelector(".quantity").innerHTML;
  const idValue = document.getElementById(idDetails);
  const idDetailsVal = idValue.getAttribute("id");
  
  // console.log(idDetails, idDetailsVal);
  // console.log(newIdVal);
  // if (idDetails) {
  if (amounts && quantity) {
    const total = Number(amounts) + Number(quantity);
    console.log(idDetails);
    // document.querySelector(".total").innerHTML = total;
  } else {
    console.log("bad");
  }
  const updated = extraField
    ? [id, ...deleteFromState(newObj, id[extraField].id, extraField)]
    : [id, ...deleteFromState(newObj, id.id, extraField)];

  return updated;
  // }
};

export const created = (obj, payload) => {
  const newObj = obj ? [...obj] : [];
  return [payload, ...newObj];
};

export const deleteFromState = (obj, objId, extraField = null) => {
  const newObj = obj ? [...obj] : [];
  return newObj.filter((obj) => {
    if (extraField) {
      return obj[extraField].id !== objId;
    }
    return obj.id !== objId;
  });
};

export const editPaginated = (obj, payload) => {
  const newObj = obj ? { ...obj } : { result: [] };
  const results = editedUpdate(newObj["result"], payload);
  newObj["result"] = results;
  newObj["count"] = results.length;
  return newObj;
};

export const createPaginated = (obj, payload) => {
  const newObj = obj ? { ...obj } : { result: [] };
  const results = created(newObj["result"], payload);
  newObj["result"] = results;
  newObj["count"] = results.length;
  return newObj;
};

export const deletePaginated = (obj, payload) => {
  const newObj = obj ? { ...obj } : { result: [] };
  const results = deleteFromState(newObj["result"], payload);
  newObj["result"] = results;
  newObj["count"] = results.length;
  return newObj;
};
