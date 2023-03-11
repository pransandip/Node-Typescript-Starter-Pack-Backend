import express from 'express';
const app = express();
const PORT = 4001;
let count = 0;
app.get('/', (req, res) => {
  count += 1;
  console.log(`IP: ${req.ip} hits server: ${count} time.`);
  res.status(200).json({ msg: 'healthy' });
});
app.listen(PORT, () => {
  console.log(`TS: server is running on port 🚀 ${PORT}.`);
});
//# sourceMappingURL=index.js.map
