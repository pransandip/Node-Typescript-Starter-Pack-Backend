'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const app = (0, express_1.default)();
const PORT = 8000;
let count = 0;
app.get('/', (req, res) => {
  count += 1;
  console.log(`IP: ${req.ip} hits server: ${count} time.`);
  res.status(200).json({ msg: 'healthy' });
});
app.listen(PORT, () => {
  console.log(`TS: server is running on port ${PORT}.`);
});
//# sourceMappingURL=index.js.map
