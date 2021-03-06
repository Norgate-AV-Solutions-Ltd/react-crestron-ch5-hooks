import * as CrComLib from "@crestron/ch5-crcomlib";

export function setupPublishTest(
    signalType: string,
    signalName: string | string[],
) {
    const publishEvent = jest.spyOn(CrComLib, "publishEvent");

    return {
        signalType,
        signalName,
        publishEvent,
    };
}

export default setupPublishTest;
