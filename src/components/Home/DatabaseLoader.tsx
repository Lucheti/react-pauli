import React from "react";
import { useConnect } from "../Utils/useConnect";
import { uploadDatabase } from "../../requests/Requests";
// import './DatabaseLoader.css'

interface Props {}

export const DatabaseLoader: React.FC<Props> = useConnect(({ state }) => {
  const { openTab } = state;
  if (openTab.identifier !== DatabasesPageId) return null;

  const formRef = React.createRef<HTMLFormElement>();
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const data = new FormData(formRef.current!);
    uploadDatabase(data).then( console.log, console.log ).catch( console.log )
  };

  return (
    <form encType={"multipart/form-data"} onSubmit={handleSubmit} ref={formRef}>
      <input type={"file"} accept=".csv,.xls,.xlsx" />
      <input type="submit" value={"Upload"} />
    </form>
  );
});

export const DatabasesPageId = "databases-page";
