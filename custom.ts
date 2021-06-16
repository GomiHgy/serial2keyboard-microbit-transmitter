
/**
 * このファイルを使って、独自の関数やブロックを定義してください。
 * 詳しくはこちらを参照してください：https://makecode.microbit.org/blocks/custom
 */

enum KeyCode{
    //% block="BACKSPACE"
    BACKSPACE = 0x08,
    //% block="TAB"
    TAB = 0x09,
    //% block="ENTER"
    ENTER = 0x0A,
    //% block="ESC"
    ESC = 0x1B,
    //% block="SPACE"
    SPACE = 0x20,
    //% block="DELETE"
    DELETE = 0x7F,
    //% block="漢字"
    KANJI = 0x8D,
    //% block="CAPS LOCK"
    CAPSLOCK = 0x91,
    //% block="F1"
    F1 = 0x92,
    //% block="F2"
    F2 = 0x93,
    //% block="F3"
    F3 = 0x94,
    //% block="F4"
    F4 = 0x95,
    //% block="F5"
    F5 = 0x96,
    //% block="F6"
    F6 = 0x97,
    //% block="F7"
    F7 = 0x98,
    //% block="F8"
    F8 = 0x99,
    //% block="F9"
    F9 = 0x9A,
    //% block="F10"
    F10 = 0x9B,
    //% block="F11"
    F11 = 0x9C,
    //% block="F12"
    F12 = 0x9D,
    //% block="PRINT SCREEN"
    PRINTSCREEN = 0x9E,
    //% block="SCROLL LOCK"
    SCROLLLOCK = 0x9F,
    //% block="PAUSE"
    PAUSE = 0xA0,
    //% block="INSERT"
    INSERT = 0xA1,
    //% block="HOME"
    HOME = 0xA2,
    //% block="PAGE UP"
    PAGEUP = 0xA3,
    //% block="END"
    END = 0xA5,
    //% block="PAGE DOWN"
    PAGEDOWN = 0xA6,
    //% block="→"
    RIGHTARROW = 0xA7,
    //% block="←"
    LEFTARROW = 0xA8,
    //% block="↓"
    DOWNARROW = 0xA9,
    //% block="↑"
    UPARROW = 0xAA,
    //% block="カナ"
    KANA = 0xE0,
    //% block="変換"
    HENKAN = 0xE2,
    //% block="無変換"
    MUHENKAN = 0xE3,
}

enum SimultaneouslyKeyCode{
    //% block="左CTRL"
    LEFTCTRL = 0xF8,
    //% block="左SHIFT"
    LEFTSHIFT = 0xF9,
    //% block="左ALT"
    LEFTALT = 0xFA,
    //% block="左GUI"
    LEFTGUI = 0xFB,
    //% block="右CTRL"
    RIGHTCTRL = 0xFC,
    //% block="右SHIFT"
    RIGHTSHIFT = 0xFD,
    //% block="右ALT"
    RIGHTALT = 0xFE,
    //% block="右GUI"
    RIGHTGUI = 0xFF,
}

/**
 * カスタムブロック
 */
//% weight=100 color=#734E30 icon="\uf287" block="キーコード"
namespace custom {
    let HexList = "0123456789ABCDEF";
    /**
     * テキストをキーコードに変換して送信します
     * @param value テキスト, eg: ""
     */
    //% block="文字列をキーコード列に変換して書き出す %value"
    export function sendKeyText(value: string): void {
        radio.sendString(value)
    }

    /**
     * キーコードを送信します
     * @param value キーコード, eg: "KeyCode.ENTER"
     */
    //% block="キーコードを書き出す %value"
    export function sendKeyCode(value: KeyCode): void {
        radio.sendNumber(value)
    }

    /**
     * キーコードを送信し、押しっぱなしにします
     * @param value キーコード, eg: "SimultaneouslyKeyCode.LEFTCTRL"
     */
    //% block="キーを押しっぱなしにする %value"
    export function pressSimultaneouslyKey(value: SimultaneouslyKeyCode): void {
        radio.sendNumber(value)
    }

    /**
     * 押しっぱなしのキーを離します
     */
    //% block="キーをすべて離す"
    export function releaseSimultaneouslyKey(): void {
        radio.sendNumber(0)
    }
}
