

export const registered = [];

export function RegisterUICallback(name, cb) {
    AddEventHandler(`_npx_uiReq:${name}`, cb);

    if (GetResourceState('np-ui') === 'started') globalThis.exports['np-ui'].RegisterUIEvent(name);

    registered.push(name);
}

export function SendUIMessage(data) {
    globalThis.exports['np-ui'].SendUIMessage(data);
}

export function SetUIFocus(hasFocus, hasCursor) {
    globalThis.exports['np-ui'].SetUIFocus(hasFocus, hasCursor);
}

export function GetUIFocus() {
    return globalThis.exports['np-ui'].GetUIFocus();
}

AddEventHandler('_npx_uiReady', () => {
    registered.forEach((eventName) => globalThis.exports['np-ui'].RegisterUIEvent(eventName));
});