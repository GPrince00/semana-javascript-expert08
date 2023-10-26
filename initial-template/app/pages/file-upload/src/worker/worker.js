onmessage = ({ data }) => {
  self.postMessage({
    status: "done",
  });
};
