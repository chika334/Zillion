import React, { useEffect, useState } from "react";
import "grapesjs-preset-webpage";
import "grapesjs/dist/css/grapes.min.css";
import { GrapesjsReact } from "grapesjs-react";
import grapesjs from "grapesjs";
import { Container, Button } from "@material-ui/core";
import parse from "html-react-parser";
import Style from "style-it";
import plugin from "grapesjs-template-manager";
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs-template-manager/dist/grapesjs-template-manager.min.css";

export const Primary = (props) => {
  const [save, setSave] = useState(false);
  const [state, setState] = useState(0);
  const [Htm, setHtm] = useState("<h1>Nothing here yet</h1>");
  const [css, setCss] = useState("<h1>Nothing yet</h1>");

  const createPage = () => {
    const { editor, templateIdx, page } = this;
    const cs = editor.Storage.getCurrentStorage();
    cs.setIdx(templateIdx);
    cs.setIsTemplate(false);
    this.page &&
      editor.load((res) => {
        editor.setComponents(
          res.components ? JSON.parse(res.components) : res.html
        );
        editor.setStyle(res.styles ? JSON.parse(res.styles) : res.css);
        cs.setId(page);
        cs.setIdx(editor.runCommand("get-uuidv4"));
        cs.setThumbnail(res.thumbnail || "");
        editor.Modal.close();
      });
  };

  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      // components: LandingPage.components || LandingPage.html,
      // style: LandingPage.style || LandingPage.css,
      // height: "100%",
      storageManager: {
        id: "gjs-", // Prefix identifier that will be used on parameters
        type: "local", // Type of the storage
        fromElement: true, //used for tempalate manager
        autosave: 1, // Store data automatically
        autoload: 1, // Autoload stored data on init
        stepsBeforeSave: 1, // If autosave enabled, indicates how many changes are necessary before store method is triggered
        // ONLY FOR LOCAL STORAGE
        // If enabled, checks if browser supports Local Storage
        checkLocal: 1,
      },
      plugins: ["gjs-blocks-basic", "grapesjs-template-manager"],
      pluginsOpts: {
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
        attributes: {
          title: "Open Templates",
        },
        className: "fa fa-file-o",
        command: "open-templates", //Open modal
        id: "open-templates",
      },
      {
        attributes: {
          title: "Save As Template",
        },
        className: "fa fa-archive",
        command: "save-as-template", //Save page as template
        id: "save-as-template",
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

    // pn.addButton('options', [{
    //   id: 'save-db',
    //   className: 'fa fa-floppy-o',
    //   command: 'save-db',
    //   attributes: {title: 'Save DB'}
    // }]);
  });

  const handleSave = () => {
    // setSave(true);
    // props.history.push("/companyName");
    setHtm(localStorage.getItem("gjs-html"));
    setCss();
  };

  console.log(Htm);

  // console.log(typeof Htm);

  const handleNext = () => {
    props.history.push({ pathname: "/companyName", state: { Htm } });
  };

  function One() {
    return (
      <>
        <Button onClick={handleSave}>Save</Button>
        {/* <Button onClick={() => setState(1)}>Next</Button> */}
        <Button onClick={handleNext}>Next</Button>
        <GrapesjsReact
          id="gjs"
          // plugins={["gjs-preset-webpage", "gjs-blocks-basic"]}
          // plugins={["gjs-preset-webpage", "gjs-blocks-basic"]}
        />
      </>
    );
  }

  useEffect(() => {
    styleCss();
  });

  function styleCss() {
    var div = document.getElementById("myDiv");
    div = localStorage.getItem("gjs-css");
  }

  function Two() {
    return (
      <div>
        <Button onClick={() => setState(0)}>Back</Button>
        <Style id="myDiv">
          {localStorage.getItem("gjs-css")}
          {/* {localStorage.getItem("gjs-components")} */}
          {Htm ? (
            <div>
              {parse(Htm)}
            </div>
          ) : (
            "Null now"
          )}
        </Style>
      </div>
    );
  }

  // const pages = [<One />, <Two />];
  const pages = <One />;
  return <Container className="pt-5">{pages}</Container>;
};

export default Primary;
