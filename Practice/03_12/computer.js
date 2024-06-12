class Computer {
    constructor(name, kind, color, usbPortsL, usbPortsR, lidOpen) {
        this.name = name;
        this.kind = kind;
        this.color = color;
        this.usbPorts = {
            left: usbPortsL,
            right: usbPortsR
        };
        this.lidOpen = lidOpen;
    }
    lidToggle(lidStatus) {
        this.lidOpen = lidStatus;
    }
}

export default Computer;
