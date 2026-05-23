function Status(request, response) {
  response.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
    dataSemString: new Date(),
    dataSemObjeto: Date(),
    resposta: "API tá rodando pae!",
  });
}

export default Status;
