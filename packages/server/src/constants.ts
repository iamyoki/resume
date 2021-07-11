const PORT = process.env.PORT ?? 5000
const PORT_MESSAGE =
  process.env.PORT_MESSAGE ??
  `PPT同步服务成功启动于${PORT}端口.\n如需切换端口请指定环境变量PORT=[number].`

export { PORT, PORT_MESSAGE }
