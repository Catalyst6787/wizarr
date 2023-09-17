import type { JellyfinForm } from "./JellyfinForm";

/**
 * Type for the event records
 * @type EventRecords
 * @property {string} join - The join event
 * @property {string} plexCreateAccount - The Plex create account event
 * @property {JellyfinForm} jellyfinCreateAccount - The Jellyfin create account event
 * @property {boolean} pleaseWait - The please wait event
 * @property {string} activeStepTitle - The active step title event
 * @property {number} step - The step event
 */
export type EventRecords = {
    "*": any;
    join: string;
    plexCreateAccount: string;
    jellyfinCreateAccount: JellyfinForm;
    pleaseWait: boolean;
    activeStepTitle: string;
    step: number;
};
