import "@measured/puck/puck.css";

import { Puck } from "@measured/puck";

// Create Puck component config
const config  : any = {
  components: {
    HeadingBlock: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: ({ children } : any) => {
        return <h1>{children}</h1>;
      },
    },
  },
};
 
// Describe the initial data
const initialData = {};
 
// Save the data to your database
const save = (data :any)  => {};
 
// Render Puck editor
export function PuckEditor() {
  return <Puck config={config} data={initialData} onPublish={save} />;
}