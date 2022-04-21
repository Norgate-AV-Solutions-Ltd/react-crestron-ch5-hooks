# React Crestron CH5 Hooks 🪝🪝

<div align="center">
	<img src="./assets/logo.svg" alt="react-logo" width="200" />
	<img src="./assets/crestron-ch5-logo.png" alt="ch5-logo" width="200" />
</div>

---

[![CI](https://github.com/Norgate-AV-Solutions-Ltd/react-crestron-ch5-hooks/actions/workflows/main.yml/badge.svg?branch=develop)](https://github.com/Norgate-AV-Solutions-Ltd/react-crestron-ch5-hooks/actions/workflows/main.yml)
[![codecov](https://codecov.io/gh/Norgate-AV-Solutions-Ltd/react-crestron-ch5-hooks/branch/develop/graph/badge.svg?token=ZA36O8UTSI)](https://codecov.io/gh/Norgate-AV-Solutions-Ltd/react-crestron-ch5-hooks)
[![Coverage Status](https://coveralls.io/repos/github/Norgate-AV-Solutions-Ltd/react-crestron-ch5-hooks/badge.svg?branch=develop)](https://coveralls.io/github/Norgate-AV-Solutions-Ltd/react-crestron-ch5-hooks?branch=develop)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg)](#contributors)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

**NOTE**

This library is currently in development. When it is ready to use, there will be a release posted here and the package will be published to NPM.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

## Contents 📖

-   [Installation ⚡️](#installation-%EF%B8%8F)
-   [Usage 🚀](#usage-)
    -   [useCrestronSubscribeAnalog 🪝](#usecrestronsubscribeanalog-%F0%9F%AA%9D)
        -   [with optional callback](#with-optional-callback)
    -   [useCrestronSubscribeDigital 🪝](#usecrestronsubscribedigital-%F0%9F%AA%9D)
        -   [with optional callback](#with-optional-callback-1)
    -   [useCrestronSubscribeSerial 🪝](#usecrestronsubscribeserial-%F0%9F%AA%9D)
        -   [with optional callback](#with-optional-callback-2)
    -   [useCrestronSubscribeAnalogCollection 🪝](#usecrestronsubscribeanalogcollection-%F0%9F%AA%9D)
        -   [with optional callback](#with-optional-callback-3)
    -   [useCrestronSubscribeDigitalCollection 🪝](#usecrestronsubscribedigitalcollection-%F0%9F%AA%9D)
        -   [with optional callback](#with-optional-callback-4)
    -   [useCrestronSubscribeSerialCollection 🪝](#usecrestronsubscribeserialcollection-%F0%9F%AA%9D)
        -   [with optional callback](#with-optional-callback-5)
    -   [useCrestronPublishAnalog 🪝](#usecrestronpublishanalog-%F0%9F%AA%9D)
    -   [useCrestronPublishDigital 🪝](#usecrestronpublishdigital-%F0%9F%AA%9D)
    -   [useCrestronPublishSerial 🪝](#usecrestronpublishserial-%F0%9F%AA%9D)
    -   [useCrestronPublishAnalogCollection 🪝](#usecrestronpublishanalogcollection-%F0%9F%AA%9D)
    -   [useCrestronPublishDigitalCollection 🪝](#usecrestronpublishdigitalcollection-%F0%9F%AA%9D)
    -   [useCrestronPublishSerialCollection 🪝](#usecrestronpublishserialcollection-%F0%9F%AA%9D)
    -   [useCrestronAnalog 🪝](#usecrestronanalog-%F0%9F%AA%9D)
    -   [useCrestronDigital 🪝](#usecrestrondigital-%F0%9F%AA%9D)
-   [Types ⌨️](#types-)
    -   [Aliases](#aliases)
        -   [Analog](#analog)
        -   [Digital](#digital)
        -   [Serial](#serial)
    -   [Event Actions](#event-actions)
        -   [IBaseEventAction](#ibaseeventaction)
        -   [IAnalogEventAction](#ianalogeventaction)
        -   [IDigitalEventAction](#idigitaleventaction)
        -   [ISerialEventAction](#iserialeventaction)
-   [Team ⚽](#team-)
-   [Contributors ✨](#contributors-)
-   [LICENSE ⚖️](#license-)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation ⚡️

```sh
npm install @norgate-av/react-crestron-ch5-hooks

# or

yarn add @norgate-av/react-crestron-ch5-hooks
```

## Usage 🚀

### useCrestronSubscribeAnalog 🪝

```tsx
import { useCrestronSubscribeAnalog } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [state] = useCrestronSubscribeAnalog("some-analog-join-or-name");

    return (
        <div>
            <h1>Analog State</h1>
            <h2>Value: {state.value}</h2>
        </div>
    );
};

export default SomeAwesomeComponent;
```

#### with optional callback

```tsx
import { useCrestronSubscribeAnalog } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [state] = useCrestronSubscribeAnalog(
        "some-analog-join-or-name",
        (value) => {
            console.log(`New Value: ${value}`);
        },
    );

    return (
        <div>
            <h1>Analog State</h1>
            <h2>Value: {state.value}</h2>
        </div>
    );
};

export default SomeAwesomeComponent;
```

### useCrestronSubscribeDigital 🪝

```tsx
import { useCrestronSubscribeDigital } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [state] = useCrestronSubscribeDigital("some-digital-join-or-name");

    return (
        <div>
            <h1>Digital State</h1>
            <h2>Value: {state.value}</h2>
        </div>
    );
};

export default SomeAwesomeComponent;
```

#### with optional callback

```tsx
import { useCrestronSubscribeDigital } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [state] = useCrestronSubscribeDigital(
        "some-digital-join-or-name",
        (value) => {
            console.log(`New Value: ${value}`);
        },
    );

    return (
        <div>
            <h1>Digital State</h1>
            <h2>Value: {state.value}</h2>
        </div>
    );
};

export default SomeAwesomeComponent;
```

### useCrestronSubscribeSerial 🪝

```tsx
import { useCrestronSubscribeSerial } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [state] = useCrestronSubscribeSerial("some-serial-join-or-name");

    return (
        <div>
            <h1>Serial State</h1>
            <h2>Value: {state.value}</h2>
        </div>
    );
};

export default SomeAwesomeComponent;
```

#### with optional callback

```tsx
import { useCrestronSubscribeSerial } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [state] = useCrestronSubscribeSerial(
        "some-serial-join-or-name",
        (value) => {
            console.log(`New Value: ${value}`);
        },
    );

    return (
        <div>
            <h1>Serial State</h1>
            <h2>Value: {state.value}</h2>
        </div>
    );
};

export default SomeAwesomeComponent;
```

### useCrestronSubscribeAnalogCollection 🪝

```tsx
import { useCrestronSubscribeAnalogCollection } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [state1, state2, state3] = useCrestronSubscribeAnalogCollection([
        "some-analog-join-or-name",
        "2",
        "3",
    ]);

    return (
        <div>
            <h1>Analog State Collection</h1>
            <h2>Value 1: {state1.value}</h2>
            <h2>Value 2: {state2.value}</h2>
            <h2>Value 3: {state3.value}</h2>
        </div>
    );
};

export default SomeAwesomeComponent;
```

#### with optional callback

```tsx
import { useCrestronSubscribeAnalogCollection } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [state1, state2, state3] = useCrestronSubscribeAnalogCollection(
        ["some-analog-join-or-name", "2", "3"],
        (value, signalName) => {
            console.log(`Signal: ${signalName}, New Value: ${value}`);
        },
    );

    return (
        <div>
            <h1>Analog State Collection</h1>
            <h2>Value 1: {state1.value}</h2>
            <h2>Value 2: {state2.value}</h2>
            <h2>Value 3: {state3.value}</h2>
        </div>
    );
};

export default SomeAwesomeComponent;
```

### useCrestronSubscribeDigitalCollection 🪝

```tsx
import { useCrestronSubscribeDigitalCollection } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [state1, state2, state3] = useCrestronSubscribeDigitalCollection([
        "some-digital-join-or-name",
        "2",
        "3",
    ]);

    return (
        <div>
            <h1>Digital State Collection</h1>
            <h2>Value 1: {state1.value}</h2>
            <h2>Value 2: {state2.value}</h2>
            <h2>Value 3: {state3.value}</h2>
        </div>
    );
};

export default SomeAwesomeComponent;
```

#### with optional callback

```tsx
import { useCrestronSubscribeDigitalCollection } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [state1, state2, state3] = useCrestronSubscribeDigitalCollection(
        ["some-digital-join-or-name", "2", "3"],
        (value, signalName) => {
            console.log(`Signal: ${signalName}, New Value: ${value}`);
        },
    );

    return (
        <div>
            <h1>Digital State Collection</h1>
            <h2>Value 1: {state1.value}</h2>
            <h2>Value 2: {state2.value}</h2>
            <h2>Value 3: {state3.value}</h2>
        </div>
    );
};

export default SomeAwesomeComponent;
```

### useCrestronSubscribeSerialCollection 🪝

```tsx
import { useCrestronSubscribeSerialCollection } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [state1, state2, state3] = useCrestronSubscribeSerialCollection([
        "some-serial-join-or-name",
        "2",
        "3",
    ]);

    return (
        <div>
            <h1>Serial State Collection</h1>
            <h2>Value 1: {state1.value}</h2>
            <h2>Value 2: {state2.value}</h2>
            <h2>Value 3: {state3.value}</h2>
        </div>
    );
};

export default SomeAwesomeComponent;
```

#### with optional callback

```tsx
import { useCrestronSubscribeSerialCollection } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [state1, state2, state3] = useCrestronSubscribeSerialCollection(
        ["some-serial-join-or-name", "2", "3"],
        (value, signalName) => {
            console.log(`Signal: ${signalName}, New Value: ${value}`);
        },
    );

    return (
        <div>
            <h1>Serial State Collection</h1>
            <h2>Value 1: {state1.value}</h2>
            <h2>Value 2: {state2.value}</h2>
            <h2>Value 3: {state3.value}</h2>
        </div>
    );
};

export default SomeAwesomeComponent;
```

### useCrestronPublishAnalog 🪝

```tsx
import { useCrestronPublishAnalog } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [action] = useCrestronPublishAnalog("some-analog-join-or-name");

    return (
        <div>
            <h1>Analog Event Actions</h1>
            <button onClick={() => action.setValue(666)}>Set Value</button>
        </div>
    );
};

export default SomeAwesomeComponent;
```

### useCrestronPublishDigital 🪝

```tsx
import { useCrestronPublishDigital } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [action] = useCrestronPublishDigital("some-digital-join-or-name");

    return (
        <div>
            <h1>Digital Event Actions</h1>
            <button onClick={() => action.setValue(true)}>
                Set Value True
            </button>
            <button onClick={() => action.setValue(false)}>
                Set Value False
            </button>
            <button onClick={() => action.push()}>Push</button>
            <button onClick={() => action.release()}>Release</button>
            <button onClick={() => action.click()}>Click</button>
        </div>
    );
};

export default SomeAwesomeComponent;
```

### useCrestronPublishSerial 🪝

```tsx
import { useCrestronPublishSerial } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [action] = useCrestronPublishSerial("some-serial-join-or-name");

    return (
        <div>
            <h1>Serial Event Actions</h1>
            <button onClick={() => action.setValue("cowbell")}>
                Set Value
            </button>
        </div>
    );
};

export default SomeAwesomeComponent;
```

### useCrestronPublishAnalogCollection 🪝

```tsx
import { useCrestronPublishAnalogCollection } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [action1, action2, action3] = useCrestronPublishAnalogCollection([
        "some-analog-join-or-name",
        "2",
        "3",
    ]);

    return (
        <div>
            <h1>Analog Event Actions Collection</h1>
            <button onClick={() => action1.setValue(666)}>Set Value 1</button>
            <button onClick={() => action2.setValue(666)}>Set Value 2</button>
            <button onClick={() => action3.setValue(666)}>Set Value 3</button>
        </div>
    );
};

export default SomeAwesomeComponent;
```

### useCrestronPublishDigitalCollection 🪝

```tsx
import { useCrestronPublishDigitalCollection } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [action1, action2, action3] = useCrestronPublishDigitalCollection([
        "some-digital-join-or-name",
        "2",
        "3",
    ]);

    return (
        <div>
            <h1>Digital Event Actions Collection</h1>
            <button onClick={() => action1.setValue(true)}>
                Set Value 1 True
            </button>
            <button onClick={() => action1.setValue(false)}>
                Set Value 1 False
            </button>
            <button onClick={() => action1.push()}>Push 1</button>
            <button onClick={() => action1.release()}>Release 1</button>
            <button onClick={() => action1.click()}>Click 1</button>

            <button onClick={() => action2.setValue(true)}>
                Set Value 2 True
            </button>
            <button onClick={() => action2.setValue(false)}>
                Set Value 2 False
            </button>
            <button onClick={() => action2.push()}>Push 2</button>
            <button onClick={() => action2.release()}>Release 2</button>
            <button onClick={() => action2.click()}>Click 2</button>

            <button onClick={() => action3.setValue(true)}>
                Set Value 3 True
            </button>
            <button onClick={() => action3.setValue(false)}>
                Set Value 3 False
            </button>
            <button onClick={() => action3.push()}>Push 3</button>
            <button onClick={() => action3.release()}>Release 3</button>
            <button onClick={() => action3.click()}>Click 3</button>
        </div>
    );
};

export default SomeAwesomeComponent;
```

### useCrestronPublishSerialCollection 🪝

```tsx
import { useCrestronPublishSerialCollection } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [action1, action2, action3] = useCrestronPublishSerialCollection([
        "some-serial-join-or-name",
        "2",
        "3",
    ]);

    return (
        <div>
            <h1>Serial Event Actions Collection</h1>
            <button onClick={() => action1.setValue("cowbell")}>
                Set Value 1
            </button>
            <button onClick={() => action2.setValue("cowbell")}>
                Set Value 2
            </button>
            <button
                onClick={() =>
                    action3.setValue("That's enough cowbell for now!")
                }
            >
                Set Value 3
            </button>
        </div>
    );
};

export default SomeAwesomeComponent;
```

### useCrestronAnalog 🪝

```tsx
import { useCrestronAnalog } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [signal] = useCrestronAnalog("some-analog-join-or-name");

    return (
        <div>
            <h1>Analog Signal</h1>
            <h2>Value: {signal.state.value}</h2>
            <button onClick={() => signal.action.setValue(666)}>
                Set Value
            </button>
        </div>
    );
};

export default SomeAwesomeComponent;
```

### useCrestronDigital 🪝

```tsx
import { useCrestronDigital } from "@norgate-av/react-crestron-ch5-hooks";

export const SomeAwesomeComponent = () => {
    const [signal] = useCrestronDigital("some-digital-join-or-name");

    return (
        <div>
            <h1>Digital Signal</h1>
            <h2>Value: {signal.state.value}</h2>
            <button onClick={() => signal.action.setValue(true)}>
                Set Value True
            </button>
            <button onClick={() => signal.action.setValue(false)}>
                Set Value False
            </button>
            <button onClick={() => signal.action.push()}>Push</button>
            <button onClick={() => signal.action.release()}>Release</button>
            <button onClick={() => signal.action.click()}>Click</button>
        </div>
    );
};

export default SomeAwesomeComponent;
```

## Types ⌨️

### Aliases

#### Analog

```ts
export declare type Analog = number;
```

#### Digital

```ts
export declare type Digital = boolean;
```

#### Serial

```ts
export declare type Serial = string;
```

### Event Actions

#### IBaseEventAction

```ts
export declare interface IBaseEventAction<T> {
    setValue: (value: T) => void;
}
```

#### IAnalogEventAction

```ts
export declare interface IAnalogEventAction extends IBaseEventAction<Analog> {}
```

#### IDigitalEventAction

```ts
export declare interface IDigitalEventAction extends IBaseEventAction<Digital> {
    push: () => void;
    release: () => void;
    click: () => void;
}
```

#### ISerialEventAction

```ts
export declare interface ISerialEventAction extends IBaseEventAction<Serial> {}
```

## Team ⚽

This project is maintained by the following person(s) and a bunch of [awesome contributors](https://github.com/Norgate-AV-Solutions-Ltd/react-crestron-ch5-hooks/graphs/contributors).

<table>
  <tr>
    <td align="center"><a href="https://github.com/damienbutt"><img src="https://avatars.githubusercontent.com/damienbutt?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Damien Butt</b></sub></a><br /></td>
  </tr>
</table>

## Contributors ✨

Thanks go to these awesome people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/features/security"><img src="https://avatars.githubusercontent.com/u/27347476?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Dependabot</b></sub></a><br /><a href="#maintenance-dependabot" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://allcontributors.org) specification.
Contributions of any kind are welcome!

## LICENSE ⚖️

[MIT](LICENSE)
