const svixImport = async () => {
  const { Webhook } = await import("svix");
  return { Webhook };
};

module.exports = svixImport;
