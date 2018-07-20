import * as React from "react";
import { Command, ButtonContentOptions } from "../types";
export interface MdeToolbarProps {
    buttonContentOptions: ButtonContentOptions;
    commands: Command[][];
    onCommand: (command: Command) => void;
    readOnly: boolean;
}
export declare const MdeToolbar: React.SFC<MdeToolbarProps>;
//# sourceMappingURL=MdeToolbar.d.ts.map