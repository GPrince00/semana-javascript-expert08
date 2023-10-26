onmessage = ({ data }) => {
  console.log("receved!!", data);
  self.postMessage("hey from worker!");
};
