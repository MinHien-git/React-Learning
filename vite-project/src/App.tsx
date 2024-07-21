import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import "./App.css";

const dummy = [
  {
    id: "1",
    name: "Hello 1",
    description: "This a description  Hello 1",
  },
  {
    id: "2",
    name: "Hello 2",
    description: "This a description  Hello 2",
  },
  {
    id: "3",
    name: "Hello 3",
    description: "This a description  Hello 3",
  },
];
function App() {
  const [value, setValue] = useState("1");
  const [select, setSelect] = useState<any>({});

  function selectUpdate(object: any) {
    setValue("update");
    setSelect(object);
    console.log(object);
  }

  return (
    <>
      <Accordion
        type="single"
        collapsible
        value={value}
        onValueChange={setValue}
      >
        <AccordionItem value={"1"}>
          {dummy.map((i) => (
            <AccordionItem key={i.id} value={i.id}>
              <AccordionTrigger>{i.name}</AccordionTrigger>
              <AccordionContent>
                Content {i.description}
                <button
                  onClick={() => {
                    selectUpdate(i);
                  }}
                >
                  Update
                </button>
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionItem>
        <AccordionItem value={"update"}>
          <AccordionItem key={"update"} value={"update"}>
            <AccordionTrigger>Update tab</AccordionTrigger>
            <AccordionContent>
              {
                <div className="grid">
                  <input title="name" value={select?.name} />
                  <textarea title="description">{select?.description}</textarea>
                </div>
              }
            </AccordionContent>
          </AccordionItem>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default App;
