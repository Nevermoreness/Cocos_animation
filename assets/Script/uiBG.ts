const { ccclass, property } = cc._decorator;

@ccclass
export default class uiBG extends cc.Component {

    @property(cc.Node) m_viewUI: cc.Node = null;
    viewUI: cc.Animation = null;

    onLoad() {
        this.viewUI = this.m_viewUI.getComponent(cc.Animation);
        this.m_viewUI.active = false;
        this.viewUI.scaleToHidePlayEnd = function () {

        }
    }


    start() { }

    show() {
        this.node.active = true;
    }
    hide() {
        this.node.active = false;
    }

    onClickScaleToShow() {
        this.m_viewUI.active = true;
        this.viewUI.play('ScaleToShow');
    }

    onClickScaleToHide() {
        this.viewUI.play('ScaleToHide');
    }
    // update (dt) {}
}
