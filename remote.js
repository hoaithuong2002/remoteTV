class Remote {
    constructor(code) {
        this.code = code;
    }

    changeChannel(TV, newChannel) {
        TV.changeChannel(newChannel);
    }

    changeStatus(TV, newStatus) {
        TV.changeStatus(newStatus);
    }
}