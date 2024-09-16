import app from './app.js';
import { config } from './config/config.js';

const PORT = config.port || 3000;

const foo: string = "string"
console.log(foo)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});