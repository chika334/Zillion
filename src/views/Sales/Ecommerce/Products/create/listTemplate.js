import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import grapesjs from "grapesjs";
import "grapesjs-preset-webpage";
import "grapesjs/dist/css/grapes.min.css";
import { GrapesjsReact } from "grapesjs-react";
import { firstHtml } from "./templates/firstTemplate";
import { styles } from "./templates/firstTemplate/styles.js";
import { Templates } from "../../../../../Data/template";
import { secondTemplate } from "./templates/secondTemplate";
import { secondStyles } from "./templates/secondTemplate/secondStyles";
import { thirdHtml } from "./templates/thirdTemplate";
import { thirdStyles } from "./templates/thirdTemplate/thirdStyles";
import { withRouter } from "react-router";
import { connect, useDispatch } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-template-manager/dist/grapesjs-template-manager.min.css";
import { hideLoader, showLoader } from "../../../../../_action/loading";
import firebaseDb from "./firebase";
import { fourthTemplate } from "./templates/fourthTemplate";
import { fourthStyle } from "./templates/fourthTemplate/styles";
import { fifthTemplate } from "./templates/fifthTemplate";
import { fifthStyle } from "./templates/fifthTemplate/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function ListTemplate(props) {
  const dispatch = useDispatch;
  const [index, setIndex] = useState(0);
  const [numbs, setNumbs] = useState(0);
  const [temps, setTemps] = useState(0);
  const [html, setHtml] = useState(null);
  const [css, setCss] = useState(null);
  const [save, setSave] = useState(false);
  const [resData, setResData] = useState(null);
  const [savedHtml, setSavedHtml] = useState(null);
  const [savedCss, setSavedCss] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (html !== null) {
      const navBar = document.querySelector(".navbar");
      const openMenuToggle = document.querySelector(".bx-menu");
      const closeMenuToggle = document.querySelector(".bx-x");
      const homeImage = document.querySelector(".img_home");

      // --- OPEN MENU

      if (navBar) {
        openMenuToggle.addEventListener("click", () => {
          if (navBar.classList.contains("show_navbar")) {
            navBar.classList.remove("show_navbar");
          } else {
            navBar.classList.add("show_navbar");
            openMenuToggle.classList.add("hide");
            closeMenuToggle.classList.add("show");
          }
        });

        // --- CLOSE MENU

        closeMenuToggle.addEventListener("click", () => {
          if (navBar.classList.contains("show_navbar")) {
            navBar.classList.remove("show_navbar");
            openMenuToggle.classList.remove("hide");
            closeMenuToggle.classList.remove("show");
          }
        });
        // Change desktop image based on device width
        const imageMobile =
          "https://github.com/r-e-d-ant/DOG-guard-website/blob/main/assets/images/dog_mobile_pink.png?raw=true";
        const imageDesktop =
          "https://github.com/r-e-d-ant/DOG-guard-website/blob/main/assets/images/dog_image_in_blob.png?raw=true";

        const changeHomeImage = (x) => {
          if (x.matches) {
            homeImage.src = imageDesktop;
          } else {
            homeImage.src = imageMobile;
          }
        };
        const x = window.matchMedia("(min-width: 780px)");
        changeHomeImage(x);
        x.addListener(changeHomeImage);

        // --------- DARK MODE ACTIVATION ----------
        let darkMode = localStorage.getItem("whitemode");
        const darkModeToggle = document.querySelector(".themecolor");
        const sunIcon = document.querySelector(".bxs-sun");
        const moonIcon = document.querySelector(".bxs-moon");

        const enableDarkMode = () => {
          // 1. Add the class dark mode to the body
          document.body.classList.add("whitemode");
          // 2. Update dark mode in the local storage
          localStorage.setItem("whitemode", "enabled");
        };

        if (darkMode === "enabled") {
          enableDarkMode();
          sunIcon.classList.add("hide");
          moonIcon.classList.add("show");
        }

        const disableDarkMode = () => {
          // 1. Remove class dark mode to the body
          document.body.classList.remove("whitemode");
          localStorage.setItem("whitemode", null);
        };

        darkModeToggle.addEventListener("click", () => {
          darkMode = localStorage.getItem("whitemode");
          if (darkMode !== "enabled") {
            enableDarkMode();
            sunIcon.classList.add("hide");
            moonIcon.classList.add("show");
          } else {
            disableDarkMode();
            sunIcon.classList.remove("hide");
            moonIcon.classList.remove("show");
          }
        });
      }
    }
  }, [html !== null]);

  const handleClose = () => {
    setOpen(false);
  };

  const LandingPage = {
    html: `${html}`,
    css: `${css}`,
    components: null,
    style: null,
  };

  console.log(LandingPage);

  useEffect(() => {
    const editor = grapesjs.init({
      avoidInlineStyle: 1,
      container: "#gjs",
      components: LandingPage.components || LandingPage.html,
      style: LandingPage.style || LandingPage.css,
      // height: "100%",
      storageManager: {
        id: "gjs-", // Prefix identifier that will be used on parameters
        type: "firebase", // Type of the storage
        fromElement: true, //used for tempalate manager
        autosave: 1, // Store data automatically
        autoload: 1, // Autoload stored data on init
        stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
        // ONLY FOR LOCAL STORAGE
        // If enabled, checks if browser supports Local Storage
        checkLocal: 1,
      },
      plugins: [
        "gjs-blocks-basic",
        "grapesjs-template-manager",
        "grapesjs-firestore",
        "gjs-preset-webpage",
      ],
      pluginsOpts: {
        "grapesjs-firestore": {
          docId: "gjs",
          apiKey: "AIzaSyBteavv51scSH30rk8gquXvDMzYQ6eVZfo",
          authDomain: "zillion-1590e.firebaseapp.com",
          projectId: "zillion-1590e",
        },
        "gjs-blocks-basic": {
          blocksBasicOpts: { flexGrid: 1 },
          customStyleManager: [
            {
              name: "General",
              buildProps: [
                "float",
                "display",
                "position",
                "top",
                "right",
                "left",
                "bottom",
              ],
              properties: [
                {
                  name: "Alignment",
                  property: "float",
                  type: "radio",
                  defaults: "none",
                  list: [
                    { value: "none", className: "fa fa-times" },
                    { value: "left", className: "fa fa-align-left" },
                    { value: "right", className: "fa fa-align-right" },
                  ],
                },
                { property: "position", type: "select" },
              ],
            },
            {
              name: "Dimension",
              open: false,
              buildProps: [
                "width",
                "flex-width",
                "height",
                "max-width",
                "min-height",
                "margin",
                "padding",
              ],
              properties: [
                {
                  id: "flex-width",
                  type: "integer",
                  name: "Width",
                  units: ["px", "%"],
                  property: "flex-basis",
                  toRequire: 1,
                },
                {
                  property: "margin",
                  properties: [
                    { name: "Top", property: "margin-top" },
                    { name: "Right", property: "margin-right" },
                    { name: "Bottom", property: "margin-bottom" },
                    { name: "Left", property: "margin-left" },
                  ],
                },
                {
                  property: "padding",
                  properties: [
                    { name: "Top", property: "padding-top" },
                    { name: "Right", property: "padding-right" },
                    { name: "Bottom", property: "padding-bottom" },
                    { name: "Left", property: "padding-left" },
                  ],
                },
              ],
            },
            {
              name: "Typography",
              open: false,
              buildProps: [
                "font-family",
                "font-size",
                "font-weight",
                "letter-spacing",
                "color",
                "line-height",
                "text-align",
                "text-decoration",
                "text-shadow",
              ],
              properties: [
                { name: "Font", property: "font-family" },
                { name: "Weight", property: "font-weight" },
                { name: "Font color", property: "color" },
                {
                  property: "text-align",
                  type: "radio",
                  defaults: "left",
                  list: [
                    {
                      value: "left",
                      name: "Left",
                      className: "fa fa-align-left",
                    },
                    {
                      value: "center",
                      name: "Center",
                      className: "fa fa-align-center",
                    },
                    {
                      value: "right",
                      name: "Right",
                      className: "fa fa-align-right",
                    },
                    {
                      value: "justify",
                      name: "Justify",
                      className: "fa fa-align-justify",
                    },
                  ],
                },
                {
                  property: "text-decoration",
                  type: "radio",
                  defaults: "none",
                  list: [
                    { value: "none", name: "None", className: "fa fa-times" },
                    {
                      value: "underline",
                      name: "underline",
                      className: "fa fa-underline",
                    },
                    {
                      value: "line-through",
                      name: "Line-through",
                      className: "fa fa-strikethrough",
                    },
                  ],
                },
                {
                  property: "text-shadow",
                  properties: [
                    { name: "X position", property: "text-shadow-h" },
                    { name: "Y position", property: "text-shadow-v" },
                    { name: "Blur", property: "text-shadow-blur" },
                    { name: "Color", property: "text-shadow-color" },
                  ],
                },
              ],
            },
            {
              name: "Decorations",
              open: false,
              buildProps: [
                "opacity",
                "border-radius",
                "border",
                "box-shadow",
                "background-bg",
              ],
              properties: [
                {
                  type: "slider",
                  property: "opacity",
                  defaults: 1,
                  step: 0.01,
                  max: 1,
                  min: 0,
                },
                {
                  property: "border-radius",
                  properties: [
                    { name: "Top", property: "border-top-left-radius" },
                    { name: "Right", property: "border-top-right-radius" },
                    { name: "Bottom", property: "border-bottom-left-radius" },
                    { name: "Left", property: "border-bottom-right-radius" },
                  ],
                },
                {
                  property: "box-shadow",
                  properties: [
                    { name: "X position", property: "box-shadow-h" },
                    { name: "Y position", property: "box-shadow-v" },
                    { name: "Blur", property: "box-shadow-blur" },
                    { name: "Spread", property: "box-shadow-spread" },
                    { name: "Color", property: "box-shadow-color" },
                    { name: "Shadow type", property: "box-shadow-type" },
                  ],
                },
                {
                  id: "background-bg",
                  property: "background",
                  type: "bg",
                },
              ],
            },
            {
              name: "Extra",
              open: false,
              buildProps: ["transition", "perspective", "transform"],
              properties: [
                {
                  property: "transition",
                  properties: [
                    { name: "Property", property: "transition-property" },
                    { name: "Duration", property: "transition-duration" },
                    { name: "Easing", property: "transition-timing-function" },
                  ],
                },
                {
                  property: "transform",
                  properties: [
                    { name: "Rotate X", property: "transform-rotate-x" },
                    { name: "Rotate Y", property: "transform-rotate-y" },
                    { name: "Rotate Z", property: "transform-rotate-z" },
                    { name: "Scale X", property: "transform-scale-x" },
                    { name: "Scale Y", property: "transform-scale-y" },
                    { name: "Scale Z", property: "transform-scale-z" },
                  ],
                },
              ],
            },
            {
              name: "Flex",
              open: false,
              properties: [
                {
                  name: "Flex Container",
                  property: "display",
                  type: "select",
                  defaults: "block",
                  list: [
                    { value: "block", name: "Disable" },
                    { value: "flex", name: "Enable" },
                  ],
                },
                {
                  name: "Flex Parent",
                  property: "label-parent-flex",
                  type: "integer",
                },
                {
                  name: "Direction",
                  property: "flex-direction",
                  type: "radio",
                  defaults: "row",
                  list: [
                    {
                      value: "row",
                      name: "Row",
                      className: "icons-flex icon-dir-row",
                      title: "Row",
                    },
                    {
                      value: "row-reverse",
                      name: "Row reverse",
                      className: "icons-flex icon-dir-row-rev",
                      title: "Row reverse",
                    },
                    {
                      value: "column",
                      name: "Column",
                      title: "Column",
                      className: "icons-flex icon-dir-col",
                    },
                    {
                      value: "column-reverse",
                      name: "Column reverse",
                      title: "Column reverse",
                      className: "icons-flex icon-dir-col-rev",
                    },
                  ],
                },
                {
                  name: "Justify",
                  property: "justify-content",
                  type: "radio",
                  defaults: "flex-start",
                  list: [
                    {
                      value: "flex-start",
                      className: "icons-flex icon-just-start",
                      title: "Start",
                    },
                    {
                      value: "flex-end",
                      title: "End",
                      className: "icons-flex icon-just-end",
                    },
                    {
                      value: "space-between",
                      title: "Space between",
                      className: "icons-flex icon-just-sp-bet",
                    },
                    {
                      value: "space-around",
                      title: "Space around",
                      className: "icons-flex icon-just-sp-ar",
                    },
                    {
                      value: "center",
                      title: "Center",
                      className: "icons-flex icon-just-sp-cent",
                    },
                  ],
                },
                {
                  name: "Align",
                  property: "align-items",
                  type: "radio",
                  defaults: "center",
                  list: [
                    {
                      value: "flex-start",
                      title: "Start",
                      className: "icons-flex icon-al-start",
                    },
                    {
                      value: "flex-end",
                      title: "End",
                      className: "icons-flex icon-al-end",
                    },
                    {
                      value: "stretch",
                      title: "Stretch",
                      className: "icons-flex icon-al-str",
                    },
                    {
                      value: "center",
                      title: "Center",
                      className: "icons-flex icon-al-center",
                    },
                  ],
                },
                {
                  name: "Flex Children",
                  property: "label-parent-flex",
                  type: "integer",
                },
                {
                  name: "Order",
                  property: "order",
                  type: "integer",
                  defaults: 0,
                  min: 0,
                },
                {
                  name: "Flex",
                  property: "flex",
                  type: "composite",
                  properties: [
                    {
                      name: "Grow",
                      property: "flex-grow",
                      type: "integer",
                      defaults: 0,
                      min: 0,
                    },
                    {
                      name: "Shrink",
                      property: "flex-shrink",
                      type: "integer",
                      defaults: 0,
                      min: 0,
                    },
                    {
                      name: "Basis",
                      property: "flex-basis",
                      type: "integer",
                      units: ["px", "%", ""],
                      unit: "",
                      defaults: "auto",
                    },
                  ],
                },
                {
                  name: "Align",
                  property: "align-self",
                  type: "radio",
                  defaults: "auto",
                  list: [
                    {
                      value: "auto",
                      name: "Auto",
                    },
                    {
                      value: "flex-start",
                      title: "Start",
                      className: "icons-flex icon-al-start",
                    },
                    {
                      value: "flex-end",
                      title: "End",
                      className: "icons-flex icon-al-end",
                    },
                    {
                      value: "stretch",
                      title: "Stretch",
                      className: "icons-flex icon-al-str",
                    },
                    {
                      value: "center",
                      title: "Center",
                      className: "icons-flex icon-al-center",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    });

    const pn = editor.Panels;
    const panelOpts = pn.addPanel({
      id: "options",
    });
    panelOpts.get("buttons").add([
      {
        attributes: { title: "Save to Database" },
        className: "fa fa-floppy-o",
        command: (editor, sender) => {
          const data = sender && sender.set("active");
          const companyName = "companyName";
          const store = editor.store();
          firebaseDb
            .child("templates")
            .child(companyName)
            .set({
              html: `${store.html}`,
              css: `${store.css}`,
            });

          setTimeout(() => {
            var urlRef = firebaseDb.child("templates").child("companyName");
            urlRef.once("value", function (snapshot) {
              snapshot.forEach(function (child) {
                // console.log(typeof child.key);
                // console.log(child.key + ": " + child.val());
                if (child.key === "html") {
                  setSavedHtml(child.val());
                } else {
                  setSavedCss(child.val());
                }
                setSave(true);
                setOpen(false);
              });
            });
          }, 300);

          setSave(true);
        },
        // command: "save-as-template", //Save page as template
        id: "save-db",
      },
      {
        attributes: {
          title: "Delete Template",
        },
        className: "fa fa-trash-o",
        command: "delete-template", //Delete open page or template
        id: "delete-templates",
      },
      {
        attributes: {
          title: "Take Screenshot",
        },
        className: "fa fa-camera",
        command: "take-screenshot", //Take an image of the canvas
        id: "take-screenshot",
      },
    ]);
  });

  useEffect(() => {
    if (temps !== 0) {
      if (temps === 1) {
        setHtml(firstHtml);
        setCss(styles);
        setIndex(numbs);
      } else if (temps === 2) {
        setHtml(secondTemplate);
        setCss(secondStyles);
        setIndex(numbs);
      } else if (temps === 3) {
        setHtml(thirdHtml);
        setCss(thirdStyles);
        setIndex(numbs);
      } else if (temps === 4) {
        setHtml(fourthTemplate);
        setCss(fourthStyle);
        setIndex(numbs);
      } else if (temps === 5) {
        setHtml(fifthTemplate);
        setCss(fifthStyle);
        setIndex(numbs);
      }
    }
  }, [temps !== 0]);

  // console.log(css);

  const viewTemplate = (e, num, tem) => {
    e.preventDefault();

    setTemps(tem);
    setNumbs(num);
  };

  const handleNext = () => {
    props.showLoader();
    if (index !== 0) {
      if (save === true) {
        props.history.push({
          pathname: "/companyName",
          state: { savedHtml, savedCss },
        });
      } else {
        setOpen(true);
      }
    } else {
      setOpen(false);
    }
  };

  return (
    <div className="property-area pt-5">
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please save design with the save icon before proceeding
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            ok
          </Button>
        </DialogActions>
      </Dialog>
      <div className="container">
        <div className="col-lg-12">
          <h3 className="text-center">{Templates.title}</h3>
          <div className="property-filter-area row custom-gutter">
            {index === 0 && (
              <>
                {Templates.items.map((allSales, i) => (
                  <div className="single-feature cardSize ml-4" key={i}>
                    <div className="p-2" style={{ backgroundColor: "grey" }}>
                      <div className="d-flex justify-content-center">
                        <img width="100%" src={allSales.src} alt="..." />
                      </div>
                      <h4 className="text-center">{allSales.name}</h4>
                      <div className="d-flex justify-content-center">
                        <Button
                          onClick={(e) =>
                            viewTemplate(e, allSales.index, allSales.templateNo)
                          }
                        >
                          {allSales.buttonName}
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}

            {index === 1 && html !== null ? (
              <>
                <Button onClick={handleNext}>
                  <a href={save === true ? "/companyName" : ""}>Next</a>
                </Button>
                <GrapesjsReact id="gjs" />
                {/* <div id="gjs">themes</div> */}
              </>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(
  connect(null, { showLoader, hideLoader })(ListTemplate)
);
