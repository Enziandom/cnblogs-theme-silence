import "./index.less";
import buildRadarMap from "./radarMap";
import buildTodolist from "./todolist";

function buildDropdownPopup() {
    // 创建下拉框面板
    (function dropdownPanel() {
        const template = `
            <div id="dropdown-panel">
                <div class="dropdown-panel-wrapper">
                    <div class="dropdown-item radar-map-wrapper">
                        <div class="dp-item-title">能力雷达图</div>
                        <canvas id="radar-map" width="300" height="300"></canvas>
                    </div>
                    <div class="dropdown-item todolist-wrapper">
                        <div class="dp-item-title">TodoList</div>
                        <div id="esa-todolist">
                            <ul id="esa-todolist-ul"></ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
        $("#header").prepend(template);
    })();

    // 创建下拉框图标
    (function dropdownIcon() {
        const template = `
            <li>
                <svg class="dropdown-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path d="M739.4 676.8l24.7-43.7 38.5 22.9-24.5 43.7-38.7-22.9zM675 638.6l24.7-43.7 38.5 22.9-24.5 43.7-38.7-22.9z m-128.5-76.4l24.5-43.7 38.5 22.9-24.5 43.7-38.5-22.9z m64.2 38.2l24.7-43.7 38.5 22.9-24.5 43.7-38.7-22.9z m-99-503.8L161.6 304.5v415.8l350.2 207.9L862 720.3V304.5L511.7 96.6z m-24.5 758.8L210.6 691.2V362.8L487.2 527v328.4z m24.5-372.1L235.1 319.1l276.7-164.2 276.7 164.2-276.8 164.2z m24.5 372.1V527l276.7-164.2v328.4L536.2 855.4z m-122.3-314l38.5-22.9 24.5 43.7-38.5 22.9-24.5-43.7zM220.8 656.1l38.5-22.9 24.5 43.7-38.5 22.9-24.5-43.7z m128.7-76.5l38.5-22.9 24.5 43.7-38.5 22.9-24.5-43.7z m-64.3 38.2l38.5-22.9 24.5 43.7-38.5 22.9-24.5-43.7z m202-283.4h49v45.8h-49v-45.8z m0 76.4h49v45.8h-49v-45.8z m0-152.8h49v45.8h-49V258z m0-76.4h49v45.8h-49v-45.8z" fill="#ffffff"></path></svg>
            </li>
        `;
        $("#navList").prepend(template);
    })();

    // 当点击下拉框图标时
    (function onclickDropdownIcon() {
        let isDropdown = true;
        $(".dropdown-icon").on('click', () => {
            if (isDropdown) {
                $("#dropdown-panel").show(300);
            } else {
                $("#dropdown-panel").hide(300);
            }
            isDropdown = !isDropdown;
        });
    })();

    buildRadarMap();
    buildTodolist();
}

export default buildDropdownPopup;