import "./index.less";

const Loader = {};

Loader.show = () => {
  $(".light-loading, .dark-loading").show();
};

Loader.hide = () => {
  $(".light-loading, .dark-loading").fadeOut();
};

export default Loader;
