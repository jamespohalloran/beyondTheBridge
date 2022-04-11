import TinaCMS, { TinaAdmin } from "tinacms";
import { TinaEditProvider, setEditing } from "tinacms/dist/edit-state";

function App() {
  setEditing(true);

  const branch = "tina-setup";
  const clientId = "3ae1db1c-4e84-4847-bee4-c633f5c9bfae";
  const apiURL =
    process.env.NODE_ENV == "development"
      ? "http://localhost:4001/graphql"
      : `https://content.tinajs.io/content/${clientId}/github/${branch}`;

  return (
    <TinaEditProvider
      editMode={
        <TinaCMS apiURL={apiURL}>
          <TinaAdmin />
        </TinaCMS>
      }
    >
      <div>Need to be in edit mode!</div>
    </TinaEditProvider>
  );
}

export default App;
