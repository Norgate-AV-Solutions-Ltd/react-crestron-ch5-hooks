import { renderHook, RenderHookResult, act } from "@testing-library/react/pure";
import CrestronCH5 from "@norgate-av/crestron-ch5-helper";
import { useCrestronPublishSerialCollection } from "../hooks";
import { ISerialEventAction } from "../types";
import { setupPublishTest, signalNames } from "./helpers";

describe("useCrestronPublishSerialCollection", () => {
    const { signalType, signalName, publishEvent } = setupPublishTest(
        CrestronCH5.SignalType.Serial,
        signalNames,
    );

    let hook: RenderHookResult<ISerialEventAction[], unknown> | null = null;
    let actions: ISerialEventAction[];

    beforeAll(() => {
        hook = renderHook(() =>
            useCrestronPublishSerialCollection(signalName as string[]),
        );

        actions = hook.result.current;
    });

    it("should initialize correctly", () => {
        expect(hook?.result.current).toEqual(
            Array.from<ISerialEventAction>({ length: signalName.length }).fill({
                setValue: expect.any(Function),
            }),
        );
    });

    it("should call CrComLib.publishEvent() correctly for each signalName", () => {
        const signalNames = signalName as string[];

        signalNames.forEach((signalName, index) => {
            const action = actions[index];

            act(() => {
                action.setValue("100");
            });

            expect(publishEvent).toHaveBeenCalledWith(
                signalType,
                signalName,
                "100",
            );

            expect(publishEvent).toHaveBeenCalledTimes(1);
            publishEvent.mockClear();
        });
    });
});
