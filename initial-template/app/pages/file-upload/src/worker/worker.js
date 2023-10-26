const qvgaConstraints = {
  width: 320,
  height: 240,
};

const encoderConfig = {
  ...qvgaConstraints,
  bitrate: 10e6,
  // WebM
  codec: "vp09.00.10.08",
  pt: 4,
  hardwareAcceleration: "prefer-software",
};

onmessage = ({ data }) => {
  self.postMessage({
    status: "done",
  });
};
