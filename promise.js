const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise(async (resolve) => {
    let ctEmosi = 0
    const dataTheaterIXX = await promiseTheaterIXX();
    for (const i in dataTheaterIXX) {
      if (dataTheaterIXX[i].hasil == emosi) {
        ctEmosi++
      }
    }

    const dataTheaterVGC = await promiseTheaterVGC();
    for (const i in dataTheaterVGC) {
      if (dataTheaterIXX[i].hasil == emosi) {
        ctEmosi++
      }
    }
    resolve(ctEmosi)

  })
};

module.exports = {
  promiseOutput,
};
