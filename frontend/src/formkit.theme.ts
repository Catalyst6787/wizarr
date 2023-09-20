const theme: Record<string, Record<string, string>> = {
    global: {
        help: "text-xs text-gray-500 ml-[2px]",
        loaderIcon: "inline-flex items-center w-4 text-gray-600 animate-spin",
        message: "text-red-500 mb-1 text-xs",
        messages: "list-none p-0 mt-1 mb-0 ml-[2px]",
    },

    text: {
        input: "peer-[.formkit-prefix-icon]:pl-9 peer-[.formkit-suffix-icon]:pr-9 mb-1 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white sm:text-sm border border-gray-300 dark:border-gray-600 rounded block w-full dark:placeholder-gray-400 focus:ring-primary focus:border-primary",
        label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        inner: "w-full relative",
        outer: "mb-4 formkit-disabled:opacity-50",
        prefixIcon: "peer absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-gray-50 dark:bg-gray-700 rounded-l border-l border-t border-b border-gray-300 dark:border-gray-600",
        suffixIcon: "peer absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none bg-gray-50 dark:bg-gray-700 rounded-r border-r border-t border-b border-gray-300 dark:border-gray-600",
    },

    email: {
        input: "peer-[.formkit-prefix-icon]:pl-9 peer-[.formkit-suffix-icon]:pr-9 mb-1 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white sm:text-sm border border-gray-300 dark:border-gray-600 rounded block w-full dark:placeholder-gray-400 focus:ring-primary focus:border-primary",
        label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        inner: "w-full relative",
        outer: "mb-4 formkit-disabled:opacity-50",
        prefixIcon: "peer absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-gray-50 dark:bg-gray-700 rounded-l border-l border-t border-b border-gray-300 dark:border-gray-600",
        suffixIcon: "peer absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none bg-gray-50 dark:bg-gray-700 rounded-r border-r border-t border-b border-gray-300 dark:border-gray-600",
    },

    password: {
        input: "peer-[.formkit-prefix-icon]:pl-9 peer-[.formkit-suffix-icon]:pr-9 mb-1 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white sm:text-sm border border-gray-300 dark:border-gray-600 rounded block w-full dark:placeholder-gray-400 focus:ring-primary focus:border-primary",
        label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        inner: "w-full relative",
        outer: "mb-4 formkit-disabled:opacity-50",
        prefixIcon: "peer absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-gray-50 dark:bg-gray-700 rounded-l border-l border-t border-b border-gray-300 dark:border-gray-600",
        suffixIcon: "peer absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none bg-gray-50 dark:bg-gray-700 rounded-r border-r border-t border-b border-gray-300 dark:border-gray-600",
    },

    search: {
        input: "peer-[.formkit-prefix-icon]:pl-9 peer-[.formkit-suffix-icon]:pr-9 mb-1 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white sm:text-sm border border-gray-300 dark:border-gray-600 rounded block w-full dark:placeholder-gray-400 focus:ring-primary focus:border-primary",
        label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        inner: "w-full relative",
        outer: "mb-4 formkit-disabled:opacity-50",
        prefixIcon: "peer absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-gray-50 dark:bg-gray-700 rounded-l border-l border-t border-b border-gray-300 dark:border-gray-600",
        suffixIcon: "peer absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none bg-gray-50 dark:bg-gray-700 rounded-r border-r border-t border-b border-gray-300 dark:border-gray-600",
    },

    file: {
        input: "peer-[.formkit-prefix-icon]:pl-9 peer-[.formkit-suffix-icon]:pr-9 mb-1 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white sm:text-sm border border-gray-300 dark:border-gray-600 rounded block w-full dark:placeholder-gray-400 focus:ring-primary focus:border-primary",
        label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        inner: "w-full relative",
        outer: "mb-4 formkit-disabled:opacity-50",
        prefixIcon: "peer absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-gray-50 dark:bg-gray-700 rounded-l border-l border-t border-b border-gray-300 dark:border-gray-600",
        suffixIcon: "peer absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none bg-gray-50 dark:bg-gray-700 rounded-r border-r border-t border-b border-gray-300 dark:border-gray-600",
        fileList: "hidden",
        noFiles: "hidden",
    },

    mask: {
        input: "peer-[.formkit-prefix-icon]:pl-9 peer-[.formkit-suffix-icon]:pr-9 mb-1 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white sm:text-sm border border-gray-300 dark:border-gray-600 rounded block w-full dark:placeholder-gray-400 focus:ring-primary focus:border-primary",
        label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        inner: "w-full relative",
        outer: "mb-4 formkit-disabled:opacity-50",
        prefixIcon: "peer absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-gray-50 dark:bg-gray-700 rounded-l border-l border-t border-b border-gray-300 dark:border-gray-600",
        suffixIcon: "peer absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none bg-gray-50 dark:bg-gray-700 rounded-r border-r border-t border-b border-gray-300 dark:border-gray-600",
    },

    checkbox: {
        input: "w-4 h-4 text-primary bg-gray-100 rounded border-gray-300 focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 formkit-disabled:opacity-50 formkit-disabled:cursor-default formkit-disabled:pointer-events-none",
        label: "ml-2 text-sm text-gray-700 dark:text-white formkit-disabled:opacity-50 formkit-disabled:cursor-default formkit-disabled:pointer-events-none",
        decorator: "hidden",
    },

    datepicker: {
        outer: "mb-4 formkit-disabled:opacity-50",
        input: "peer-[.formkit-prefix-icon]:pl-9 peer-[.formkit-suffix-icon]:pr-9 mb-1 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white sm:text-sm border border-gray-300 dark:border-gray-600 rounded block w-full dark:placeholder-gray-400 focus:ring-primary focus:border-primary p-2.5",
        timeInput: "peer-[.formkit-prefix-icon]:pl-9 peer-[.formkit-suffix-icon]:pr-9 mb-1 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white sm:text-sm border border-gray-300 dark:border-gray-600 rounded block w-full dark:placeholder-gray-400 focus:ring-primary focus:border-primary p-2.5",
        label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        openButton: "absolute top-[30%] bottom-[25%] right-1 text-gray-700 dark:text-gray-300",
        calendarIcon: "flex w-8 grow-0 shrink-0 self-stretch select-none [&>svg]:w-full [&>svg]:m-auto [&>svg]:max-h-[1em] [&>svg]:max-w-[1em]",
        inner: "relative",

        // bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600
        panelWrapper: "!absolute top-[calc(100%_+_0.5em)] rounded p-5 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 z-10 w-full",
        panelHeader: "hidden grid grid-cols-[2.5em_1fr_2.5em] justify-center items-center border-b-2 border-white dark:border-gray-400 mb-4 pb-4 dark:text-gray-400 text-black",

        yearButton: "appearance-none cursor-pointer px-3 py-1 border-2 rounded mx-1 border-white dark:border-gray-400",
        monthButton: "appearance-none cursor-pointer px-3 py-1 border-2 rounded mx-1 border-white dark:border-gray-400",
        dayButton: "appearance-none cursor-pointer px-3 py-1 border-2 rounded mx-1 border-white dark:border-gray-400",

        yearsHeader: "flex items-center justify-center col-start-2 col-end-2",
        monthsHeader: "flex items-center justify-center col-start-2 col-end-2",
        daysHeader: "flex items-center justify-center text-black dark:text-gray-400",
        timeHeader: "flex items-center justify-center col-start-2 col-end-2",

        // bg-gray-200 dark:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-600 text-black dark:text-white
        year: "cursor-pointer flex items-center justify-center w-[calc(20%_-_1em)] m-2 p-2 rounded bg-gray-200 dark:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-600 text-black dark:text-white data-[is-extra=true]:opacity-25 formkit-disabled:opacity-50 formkit-disabled:cursor-default formkit-disabled:pointer-events-none",
        month: "cursor-pointer flex items-center justify-center w-[calc(33%_-_1em)] m-2 p-2 rounded bg-gray-200 dark:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-600 text-black dark:text-white data-[is-extra=true]:opacity-25 formkit-disabled:opacity-50 formkit-disabled:cursor-default formkit-disabled:pointer-events-none",
        dayCell: "cursor-pointer flex items-center justify-center w-[2.25em] h-[2.25em] m-1 p-2 rounded bg-gray-200 dark:bg-gray-800 focus:bg-gray-100 dark:focus:bg-gray-600 text-black dark:text-white data-[is-extra=true]:opacity-25 formkit-disabled:opacity-50 formkit-disabled:cursor-default formkit-disabled:pointer-events-none",

        years: "flex flex-wrap",
        months: "flex flex-wrap",
        calendar: "w-full flex justify-center",
        week: "flex formkit-disabled:opacity-50 formkit-disabled:cursor-default formkit-disabled:pointer-events-none",

        weekDays: "hidden",
        weekDay: "flex w-[2.25em] h-[1em] m-1 items-center justify-center rounded font-medium lowercase",

        next: "ml-auto px-3 py-1 hover:bg-gray-100 hover:rounded col-start-3 col-end-3",
        nextLabel: "hidden",
        nextIcon: "flex w-3 select-none [&>svg]:w-full",

        prev: "mr-auto px-3 py-1 hover:bg-gray-100 hover:rounded col-start-1 col-end-1",
        prevLabel: "hidden",
        prevIcon: "flex w-3 select-none [&>svg]:w-full",
    },

    "datetime-local": {
        input: "peer-[.formkit-prefix-icon]:pl-9 peer-[.formkit-suffix-icon]:pr-9 mb-1 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white sm:text-sm border border-gray-300 dark:border-gray-600 rounded block w-full dark:placeholder-gray-400 focus:ring-primary focus:border-primary",
        label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        inner: "w-full relative",
        outer: "mb-4 formkit-disabled:opacity-50",
    },

    "family:button": {
        input: "$reset inline-flex items-center bg-primary hover:bg-primary_hover focus:outline-none text-white font-medium rounded dark:bg-primary dark:hover:bg-primary_hover px-5 py-2.5 text-sm formkit-disabled:bg-gray-400 formkit-loading:before:w-4 formkit-loading:before:h-4 formkit-loading:before:mr-2 formkit-loading:before:border formkit-loading:before:border-2 formkit-loading:before:border-r-transparent formkit-loading:before:rounded-3xl formkit-loading:before:border-white formkit-loading:before:animate-spin",
        // wrapper: "mb-1",
        prefixIcon: "$reset block w-4 mr-2 stretch",
        suffixIcon: "$reset block w-4 ml-2 stretch",
    },

    tooltipInput: {
        input: "peer-[.formkit-prefix-icon]:pl-9 peer-[.formkit-suffix-icon]:pr-9 mb-1 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white sm:text-sm border border-gray-300 dark:border-gray-600 rounded block w-full dark:placeholder-gray-400 focus:ring-primary focus:border-primary",
    },

    select: {
        outer: "mb-4 formkit-disabled:opacity-50",
        input: "peer-[.formkit-prefix-icon]:pl-9 peer-[.formkit-suffix-icon]:pr-9 mb-1 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white sm:text-sm border border-gray-300 dark:border-gray-600 rounded block w-full dark:placeholder-gray-400 focus:ring-primary focus:border-primary",
        label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        selectIcon: "flex p-[3px] shrink-0 w-5 mr-2 -ml-[1.5em] h-full pointer-events-none [&>svg]:w-[1em]",
        option: "formkit-multiple:p-3 formkit-multiple:text-sm text-gray-700",
        icon: "hidden",
    },

    slider: {
        help: "mt-0 mb-1",
        sliderInner: 'flex items-center py-1 [&>.formkit-max-value]:mb-0 [&>.formkit-max-value]:ml-8 [&>.formkit-max-value]:shrink [&>.formkit-max-value]:grow-0 [&>.formkit-icon]:bg-none [&>.formkit-icon]:border-none [&>.formkit-icon]:p-0 [&>.formkit-icon]:w-4 [&>.formkit-prefix-icon]:mr-2 [&>.formkit-suffix-icon]:ml-2 [&[data-has-mark-labels="true"]_.formkit-track]:mb-4',
        track: "grow relative z-[3] py-1",
        trackWrapper: "px-[2px] rounded-full bg-gray-200 dark:bg-gray-700",
        trackInner: "h-2 mx-[2px] relative",
        fill: "h-full rounded-full absolute top-0 mx-[-4px] bg-primary dark:bg-primary",
        marks: "absolute pointer-events-none left-0 right-0 top-0 bottom-0",
        mark: 'absolute top-1/2 w-[3px] h-[3px] rounded-full -translate-x-1/2 -translate-y-1/2 bg-gray-400 data-[active="true"]:bg-white',
        markLabel: "absolute top-[calc(100%+0.5em)] left-1/2 text-gray-400 text-[0.66em] -translate-x-1/2",
        handles: "m-0 p-0 list-none",
        handle: 'group w-5 h-5 rounded-full bg-primary absolute top-1/2 left-0 z-[2] -translate-x-1/2 -translate-y-1/2 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1),0_1px_2px_0_rgba(0,0,0,0.8)] focus-visible:outline-0 focus-visible:ring-2 ring-primary data-[is-target="true"]:z-[3]',
        tooltip: 'absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-[4px] bg-primary text-white py-1 px-2 text-xs leading-none whitespace-nowrap rounded-sm opacity-0 pointer-events-none transition-opacity after:content-[""] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:-translate-y-[1px] after:border-4 after:border-transparent after:border-t-primary group-hover:opacity-100 group-focus-visible:opacity-100 group-data-[show-tooltip="true"]:opacity-100',
        linkedValues: "flex items-start justify-between",
        minValue: 'grow max-w-[45%] mb-0 relative [&_.formkit-inner::after]:content-[""] [&_.formkit-inner::after]:absolute [&_.formkit-inner::after]:left-[105%] [&_.formkit-inner::after]:-translate-y-1/2 [&_.formkit-inner::after]:w-[10%] [&_.formkit-inner::after]:h-[1px] [&_.formkit-inner::after]:bg-gray-500',
        maxValue: "grow max-w-[45%] mb-0 relative",
        chart: "relative z-[2] mb-2 flex justify-between items-center w-full aspect-[3/1]",
        chartBar: 'absolute bottom-0 h-full bg-gray-400 opacity-[.66] data-[active="false"]:opacity-[.25]',
    },

    range: {
        inner: "$reset flex items-center",
        input: "$reset w-full h-2 bg-gray-200 rounded appearance-none cursor-pointer dark:bg-gray-700 mb-2 accent-primary",
        prefixIcon: "$reset w-4 mr-1 flex self-stretch grow-0 shrink-0 [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto",
        suffixIcon: "$reset w-4 ml-1 flex self-stretch grow-0 shrink-0 [&>svg]:max-w-[1em] [&>svg]:max-h-[1em] [&>svg]:m-auto",
    },

    dropdown: {
        outer: "mb-4 formkit-disabled:opacity-50",
        input: "peer-[.formkit-prefix-icon]:pl-9 peer-[.formkit-suffix-icon]:pr-9 mb-1 w-full bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white sm:text-sm border border-gray-300 dark:border-gray-600 rounded block w-full dark:placeholder-gray-400 focus:ring-primary focus:border-primary",
        label: "block mb-2 text-sm font-medium text-gray-900 dark:text-white",
        selectIcon: "flex p-[3px] shrink-0 w-5 mr-2 -ml-[1.5em] h-full pointer-events-none [&>svg]:w-[1em]",
        option: "formkit-multiple:p-3 formkit-multiple:text-sm text-gray-700 dark:text-white",

        dropdownWrapper: "my-2 w-full shadow-lg rounded [&::-webkit-scrollbar]:hidden",
        emptyMessageInner: "flex items-center justify-center text-sm p-2 text-center w-full text-gray-500 [&>span]:mr-3 [&>span]:ml-0",
        inner: "relative flex rounded mb-1 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700",

        listbox: "rounded bg-white dark:bg-gray-800 z-10 w-full overflow-hidden",
        listboxButton: "flex w-12 self-stretch justify-center mx-auto",
        listitem: 'relative hover:bg-gray-300 dark:hover:bg-gray-600 data-[is-active="true"]:bg-gray-300 dark:data-[is-active="true"]:bg-gray-600',

        placeholder: "px-4 p-3 text-gray-100 text-sm w-full text-left text-gray-600 dark:text-gray-400",
        selector: "flex w-full",
        selectedIcon: "block absolute top-1/2 right-4 w-3 -translate-y-1/2",

        tagsWrapper: "w-full",
        tags: "flex flex-row flex-wrap w-full py-1.5 px-2 pr-8",
        tag: "flex items-center my-1 p-1 bg-gray-300 dark:bg-gray-800 text-black dark:text-white text-xs rounded",
        tagLabel: "pl-2 pr-1",
        tagWrapper: "mr-1 focus:outline-none focus:text-white [&>div]:focus:bg-gray-500 [&>div>button]:focus:text-white",
        removeSelection: "w-2.5 mx-1 self-center text-black leading-none",
        icon: "block text-black dark:text-white",
    },

    taglist: {
        input: "px-1 py-1 w-[0%] grow w-full",
        removeSelection: "w-2.5 mx-1 self-center text-black leading-none",
        tag: "flex items-center my-1 p-1 bg-gray-200 text-xs rounded-full",
        tagWrapper: "mr-1 focus:outline-none focus:text-white [&>div]:focus:bg-gray-500 [&>div>button]:focus:text-white",
        tagLabel: "pl-2 pr-1",
        tagsWrapper: "w-full",
        tags: "flex flex-row flex-wrap w-full py-1.5 px-2",
    },
};

export default theme;
