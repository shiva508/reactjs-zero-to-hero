import { useRef } from "react";
import Input from "./Input";

const NewProject = ({ add }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const saveHandler = () => {
    const titleInput = title.current.value;
    const descriptionInput = description.current.value;
    const dueDateInput = dueDate.current.value;
    console.log(titleInput, descriptionInput, dueDateInput);
    add({
      title: titleInput,
      description: descriptionInput,
      dueDate: dueDateInput,
    });
  };
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={saveHandler}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input ref={dueDate} label="Due Date" />
      </div>
    </div>
  );
};
export default NewProject;
