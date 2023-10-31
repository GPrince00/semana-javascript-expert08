import CanvasRenderer from "./canvasRender.js";
import MP4Demuxer from "./mp4Demuxer.js";
import VideoProcessor from "./videoProcessor.js";
import WebMWriter from "./../deps/webm-writer2.js";

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

const webMWriterConfig = {
  codec: "VP9",
  width: encoderConfig.width,
  height: encoderConfig.height,
  bitrate: encoderConfig.bitrate,
};

const mp4Demuxer = new MP4Demuxer();

const videoProcessor = new VideoProcessor({
  mp4Demuxer,
  webMWriter: new WebMWriter(webMWriterConfig),
});

onmessage = async ({ data }) => {
  const renderFrame = CanvasRenderer.getRenderer(data.canvas);
  await videoProcessor.start({
    file: data.file,
    renderFrame,
    encoderConfig,
    sendMessage: (message) => {
      self.postMessage(message)
    }
  });
  // self.postMessage({
  //   status: "done",
  // });
};
