import Blockly from "blockly/core";
import { javascriptGenerator } from "blockly/javascript";
import ko from "blockly/msg/ko";
import en from "blockly/msg/en";

import "blockly/blocks";
import React, { useEffect, useRef } from "react";

const BlocklyLayout = (props: any) => {
  const blocklyDiv = useRef<HTMLDivElement>(null);
  const toolbox = useRef<HTMLDivElement>(null);
  let primaryWorkspace = useRef<any>();

  const generateCode = () => {
    var code = javascriptGenerator.workspaceToCode(primaryWorkspace.current);
    console.log(code);
  };

  useEffect(() => {
    Blockly.setLocale(en);

    const { initialXml, children, ...rest } = props;
    if (blocklyDiv.current) {
      primaryWorkspace.current = Blockly.inject(blocklyDiv.current, {
        toolbox: {
          kind: "categoryToolbox",
          contents: [
            {
              kind: "category",
              name: "Control",
              contents: [
                {
                  kind: "block",
                  type: "controls_if",
                },
              ],
            },
            {
              kind: "category",
              name: "Logic",
              contents: [
                {
                  kind: "block",
                  type: "logic_compare",
                },
                {
                  kind: "block",
                  type: "logic_operation",
                },
                {
                  kind: "block",
                  type: "logic_boolean",
                },
              ],
            },
          ],
        },
        ...rest,
      });

      if (initialXml) {
        Blockly.Xml.domToWorkspace(
          Blockly.Xml.textToDom(initialXml),
          primaryWorkspace.current
        );
      }
    }
  }, [primaryWorkspace, toolbox, blocklyDiv, props]);

  return (
    <>
      <button onClick={generateCode}>Convert</button>
      <div
        style={{
          height: "50%",
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
        ref={blocklyDiv}
        id="blocklyDiv"
      />
      <div style={{ display: "none" }} ref={toolbox}>
        {props.children}
      </div>
    </>
  );
};

export default BlocklyLayout;

const Block = (p: any) => {
  const { children, ...props } = p;
  props.is = "blockly";
  return React.createElement("block", props, children);
};

const Category = (p: any) => {
  const { children, ...props } = p;
  props.is = "blockly";
  return React.createElement("category", props, children);
};

const Value = (p: any) => {
  const { children, ...props } = p;
  props.is = "blockly";
  return React.createElement("value", props, children);
};

const Field = (p: any) => {
  const { children, ...props } = p;
  props.is = "blockly";
  return React.createElement("field", props, children);
};

const Shadow = (p: any) => {
  const { children, ...props } = p;
  props.is = "blockly";
  return React.createElement("shadow", props, children);
};

export { Block, Category, Value, Field, Shadow };
