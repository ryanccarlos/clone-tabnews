import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();

  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />

      <h2>Database</h2>
      <DatabaseStatus />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Carregando...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return <div>Última atualização: {updatedAtText}</div>;
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let databaseVersion = "Carregando...";
  let databaseOpenedConnections = "Carregando...";
  let databaseMaxConnections = "Carregando...";

  if (!isLoading && data) {
    databaseVersion = data.dependencies.database.version;

    databaseOpenedConnections = data.dependencies.database.opened_connections;

    databaseMaxConnections = data.dependencies.database.max_connections;
  }

  return (
    <div>
      <p>
        Versão: {databaseVersion}
        <br />
        Conexões Abertas: {databaseOpenedConnections}
        <br />
        Conexões Máximas: {databaseMaxConnections}
      </p>
    </div>
  );
}
