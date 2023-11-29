

import { Delay } from "../../shared/utils/tools";
import { loadAnimDict } from "../utils";

export async function InitEvents(): Promise<void> {
    const dict = 'amb@code_human_in_bus_passenger_idles@female@tablet@base';
    on('np-inventory:itemUsed', async (name: string, data: any) => {
        if (name !== "book") return;
        
        console.log("1")

        await loadAnimDict(dict);
        TaskPlayAnim(PlayerPedId(), dict, 'base', 3, 3, -1, 49, 0, false, false, false);

        console.log("2")

        emit("attachItemPhone", "openBook");

        console.log("3")

        const {
            pages: pages,
            width: width,
            height: height
        } = JSON.parse(data);

        console.log("4")

        const ui = {
            pages: pages,
            width: width,
            height: height
        };

        console.log("5")

        exports['np-ui'].openApplication('book', ui);
        console.log("6")
    });

    on('np-inventory:itemUsed', async (name: string, data: any) => {
        if (name !== "casinoblueprints") return;

        await loadAnimDict(dict);
        TaskPlayAnim(PlayerPedId(), dict, 'base', 3, 3, -1, 49, 0, false, false, false);

        emit("attachItemPhone", "openBook");

        const pages = ['https://i.imgur.com/kOKGn8d.png', 'https://i.imgur.com/DrJKkoQ.jpeg', 'https://i.imgur.com/6RFTxtd.png', 'https://i.imgur.com/KWoL8jQ.png', 'https://i.imgur.com/2JGDkDV.jpeg', 'https://i.imgur.com/yQK2fsU.jpeg', 'https://i.imgur.com/PYaI6qY.png', 'https://i.imgur.com/g3gOXQ8.png', 'https://i.imgur.com/30AhDK6.jpeg', 'https://i.imgur.com/AK1uEoa.jpeg', 'https://i.imgur.com/iXvHoNw.png', 'https://i.imgur.com/vc5siU8.png', 'https://i.imgur.com/4vBecRk.jpeg', 'https://i.imgur.com/0r2rN8p.jpeg', 'https://i.imgur.com/g5xkFIw.png', 'https://i.imgur.com/pHAPxn9.png', 'https://i.imgur.com/CpdJRYl.png'];
        
        const ui = {
            pages: pages,
            width: 1500,
            height: 1125,
        }

        exports['np-ui'].openApplication('book', ui);
    });

    on('np-inventory:itemUsed', async (name: string, data: any) => {
        if (name !== "rearingbroncostatuebook") return;
        
        await loadAnimDict(dict);
        TaskPlayAnim(PlayerPedId(), dict, 'base', 3, 3, -1, 49, 0, false, false, false);

        emit("attachItemPhone", "openBook");

        const pages = ['https://cdn.discordapp.com/attachments/1061244578621050990/1075159601433034843/image_3.png', 'https://i.imgur.com/kwskDAz.png', 'https://i.imgur.com/CjVomBp.png', 'https://i.imgur.com/dsukOFa.png'];
        
        const ui = {
            pages: pages,
            width: 1200,
            height: 1500,
        }

        exports['np-ui'].openApplication('book', ui);
    });

    on('np-inventory:itemUsed', async (name: string, data: any) => {
        if (name !== "impotentragefigurebook") return;
        
        await loadAnimDict(dict);
        TaskPlayAnim(PlayerPedId(), dict, 'base', 3, 3, -1, 49, 0, false, false, false);

        emit("attachItemPhone", "openBook");

        const pages = ['https://i.imgur.com/CC4r1Po.png', 'https://i.imgur.com/J3x9xtr.png', 'https://i.imgur.com/goqrZKn.png', 'https://i.imgur.com/xC8Cpop.png'];
        
        const ui = {
            pages: pages,
            width: 1200,
            height: 1500,
        }

        exports['np-ui'].openApplication('book', ui);
    });

    on('np-inventory:itemUsed', async (name: string, data: any) => {
        if (name !== "glimpseofhopebook") return;
        
        await loadAnimDict(dict);
        TaskPlayAnim(PlayerPedId(), dict, 'base', 3, 3, -1, 49, 0, false, false, false);

        emit("attachItemPhone", "openBook");

        const pages = ['https://i.imgur.com/drtQQTo.png', 'https://i.imgur.com/REHdTvG.png', 'https://i.imgur.com/mf9ahFh.png', 'https://i.imgur.com/mQi5CZ7.png', 'https://i.imgur.com/TreCPFD.png', 'https://i.imgur.com/sy8ffwE.png', 'https://i.imgur.com/H04nf7b.png', 'https://i.imgur.com/exQ0KCy.png'];
        
        const ui = {
            pages: pages,
            width: 1200,
            height: 1500,
        }

        exports['np-ui'].openApplication('book', ui);
    });

    on("np-ui:application-closed", async (application: string) => {
        if (application === "book") {
            await Delay(1000);
            StopAnimTask(PlayerPedId(), dict, "base", 1);
            TriggerEvent("destroyPropPhone");
        }
    });
};