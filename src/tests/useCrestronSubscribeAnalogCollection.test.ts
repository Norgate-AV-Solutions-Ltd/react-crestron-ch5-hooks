import { renderHook, RenderHookResult, act } from "@testing-library/react/pure";
import CrestronCH5 from "@norgate-av/crestron-ch5-helper";
import { useCrestronSubscribeAnalogCollection } from "../hooks";
import { Analog, IAnalogState } from "../types";
import { setupSubscribeTest, signalNames } from "./helpers";

describe("useCrestronSubscribeAnalogCollection", () => {
    const {
        signalType,
        signalName,
        callback,
        subscribeState,
        unsubscribeState,
    } = setupSubscribeTest<Analog>(CrestronCH5.SignalType.Analog, signalNames);

    let hook: RenderHookResult<IAnalogState[], unknown> | null = null;

    beforeAll(() => {
        hook = renderHook(() =>
            useCrestronSubscribeAnalogCollection(
                signalName as string[],
                callback,
            ),
        );
    });

    it("should initialize correctly", () => {
        expect(hook?.result.current).toEqual(
            Array.from<IAnalogState>({ length: signalName.length }).fill({
                value: 0,
            }),
        );
    });

    it("should call CrComLib.subscribeState() correctly", () => {
        expect(subscribeState).toHaveBeenCalledWith(
            signalType,
            expect.any(String),
            expect.any(Function),
        );

        expect(subscribeState).toHaveBeenCalledTimes(signalName.length);
        expect(subscribeState).toHaveReturnedWith(expect.any(String));
    });

    it("should call CrComLib.unsubscribeState() correctly on unmount", () => {
        act(() => {
            hook?.unmount();
        });

        expect(unsubscribeState).toHaveBeenCalledWith(
            signalType,
            expect.any(String),
            expect.any(String),
        );

        expect(unsubscribeState).toHaveBeenCalledTimes(signalName.length);
    });
});
