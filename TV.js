class TV {
    constructor(channel, volume, status) {
        this.channel = channel;
        this.volume = volume;
        this.status = status;
    }

    changeChannel(newChannel) {
        this.channel = newChannel;
    }

    changeVolume(newVolume) {
        this.volume = newVolume;
    }

    changeStatus() {
        if (this.status == true) {
            this.status = false
        } else this.status = true;
    }
}