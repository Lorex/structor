import * as React from 'react';
import { Collapse } from 'react-collapse';
import classNames from 'classnames';
import { SkjemautfyllerContainer } from '@helsenorge/skjemautfyller/components';
import { getSidebarSections } from '@helsenorge/skjemautfyller/util/extension';

const getResources = (language) => {
    if (language === 'en-GB') {
        return {
            deleteButtonText: 'Delete',
            validationSummaryHeader: 'Check that the following are filled in correctly:',
            validationFileMax: 'File size must be less than 25MB',
            validationFileType: 'The file type must be jpeg, png, or pdf',
            supportedFileFormats: 'Valid file formats are jpeg, png and pdf',
            selectDefaultPlaceholder: 'Select one of the options.',
            resetTime: 'Reset time',
            errorAfterMaxDate: 'Date cannot be after maximum date',
            errorBeforeMinDate: 'Date cannot be before minimum date',
            dateRequired: 'Select date, or enter date as follows: dd.mm.yyyy.',
            oppgiTid: ' Enter time',
            ugyldigTid: 'Invalid time',
            ugyldigDatoTid: 'Invalid date and time',
            oppgiVerdi: 'Select one of the options.',
            oppgiGyldigVerdi: 'Please enter a valid value',
            formCancel: 'Cancel',
            formSend: 'Submit',
            formSave: 'Show QuestionnaireResponse',
            formError: 'Check that everything is filled in correctly.',
            formOptional: '(optional)',
            formRequired: '(required)',
            repeatButtonText: 'Add',
            avsluttSkjema: 'Discard changes',
            fortsett: 'Continue editing',
            confirmDeleteButtonText: 'Delete row',
            confirmDeleteCancelButtonText: 'Discard changes',
            confirmDeleteHeading: 'There are unsaved changes',
            confirmDeleteDescription: 'If you delete the row, your changes will be discarded.',
            minutePlaceholder: 'mm',
            hourPlaceholder: 'hh',
            ikkeBesvart: 'Not answered',
            uploadButtonText: 'Upload file',
            filterDateCalendarButton: 'Select date',
            filterDateNavigateBackward: 'Back',
            filterDateNavigateForward: 'Forward',
            filterDateErrorDateFormat: 'The date is entered in the wrong format',
            filterDateErrorBeforeMinDate: 'From date can not be later than to date',
            filterDateErrorAfterMaxDate: 'From date can not be later than to date',
            validationNotAllowed: 'is not allowed',
            formRequiredErrorMessage: 'This field is required',
            deleteAttachmentText: 'Delete',
            autoSuggestLoadError: 'Technical error',
            autosuggestNoSuggestions: 'No results found for "{0}". Try another word or check for spelling errors.',
            stringOverMaxLengthError: 'You have typed too many characters. Make the text shorter.',
            maxLengthText: 'Maximum {0} characters',
            chooseFilesText: 'Select files',
            skipLinkText: 'Go to navigator',
            clearDate: 'Remove date',
            calendarLabel: 'Calendar',
            closeDatePicker: 'Close',
            focusStartDate: 'Use the calendar and select a date',
            jumpToPrevMonth: 'Go backward to last month',
            jumpToNextMonth: 'Go forward to next month',
            keyboardShortcuts: 'Keyboard shortcuts',
            showKeyboardShortcutsPanel: 'Open the keyboard shortcuts panel',
            hideKeyboardShortcutsPanel: 'Close the keyboard shortcut panel',
            enterKey: 'Enter key',
            leftArrowRightArrow: 'Right and left arrow keys',
            upArrowDownArrow: 'Up and down arrow keys',
            pageUpPageDown: 'Page up and Page down key',
            homeEnd: 'Home and End key',
            escape: 'Escape key',
            questionMark: 'Question mark',
            openThisPanel: 'Open this panel',
            selectFocusedDate: 'Select the date that has focus',
            moveFocusByOneDay: 'Move one day backward (left) and forward (right)',
            moveFocusByOneWeek: 'Move one week backward (up) and forward (down)',
            moveFocusByOneMonth: 'Change month',
            moveFocustoStartAndEndOfWeek: 'Go to the first or last day of the week',
            returnFocusToInput: 'Return to the date in the input field',
            year_field_invalid: 'Enter a valid value for the year field',
            year_field_maxdate: 'The latest year you can choose is',
            year_field_mindate: 'The earliest year you can choose is',
            year_field_required: 'Year is required',
            yearmonth_field_invalid: 'Invalid value',
            yearmonth_field_invalid_year: 'You must enter a valid year',
            yearmonth_field_maxdate: 'The latest time you can choose is',
            yearmonth_field_mindate: 'The earliest time you can choose is',
            yearmonth_field_month_placeholder: 'Choose month',
            yearmonth_field_required: 'Year and month is required',
            yearmonth_field_year_placeholder: 'Choose year',
            adresseKomponent_header: 'Who is the recipient?',
            adresseKomponent_skjemaSendesTil: 'Questionnaire will be sent to:',
            adresseKomponent_sublabel: 'You must select recipient before submitting the questionnaire.',
            adresseKomponent_velgAvdeling: 'Select department',
            adresseKomponent_velgHelseforetak: 'Select health company',
            adresseKomponent_velgHelseregion: 'Select health region',
            adresseKomponent_velgSykehus: 'Select hospital',
            adresseKomponent_velgKlinikk: 'Select clinic',
            adresseKomponent_velgSeksjon: 'Select section',
            adresseKomponent_velgSengepost: 'Select bed post',
            adresseKomponent_velgPoliklinikk: 'Select polyclinic',
            adresseKomponent_velgTjeneste: 'Select place of treatment',
            adresseKomponent_feilmelding: 'You must select a recipient.',
            adresseKomponent_loadError: 'Technical error. Could not load recipients.',
        };
    }
    return {
        deleteButtonText: 'Slett',
        validationSummaryHeader: 'Sjekk at følgende er riktig utfylt:',
        validationFileMax: 'Filstørrelsen må være mindre enn 25MB',
        validationFileType: 'Filtypen må være jpeg, png, eller pdf',
        supportedFileFormats: 'Gyldige filformater er jpeg, png og pdf',
        selectDefaultPlaceholder: 'Velg...',
        resetTime: 'Nullstill tidspunkt',
        errorAfterMaxDate: 'Dato kan ikke være etter maksimum dato',
        errorBeforeMinDate: 'Dato kan ikke være før minimums dato',
        dateRequired: 'Oppgi en dato',
        oppgiTid: ' Oppgi tid',
        ugyldigTid: 'Ugyldig tid',
        oppgiDatoTid: 'oppgi dato og tid',
        ugyldigDatoTid: 'Ugyldig dato og tid',
        oppgiVerdi: 'Oppgi en verdi',
        oppgiGyldigVerdi: 'Oppgi en gyldig verdi',
        formCancel: 'Avbryt',
        formSend: 'Fullfør',
        formSave: 'Vis QuestionnaireResponse',
        formError: 'Sjekk at alt er riktig utfylt.',
        formOptional: '(valgfritt)',
        formRequired: '(må fylles ut)',
        repeatButtonText: 'Legg til',
        avsluttSkjema: 'Avslutt skjema',
        fortsett: 'Fortsett',
        confirmDeleteButtonText: 'Forkast endringer',
        confirmDeleteCancelButtonText: 'Avbryt',
        confirmDeleteHeading: 'Det finnes endringer',
        confirmDeleteDescription: 'Hvis du sletter, vil du miste endringene.',
        minutePlaceholder: 'mm',
        hourPlaceholder: 'tt',
        ikkeBesvart: 'Ikke besvart',
        uploadButtonText: 'Last opp fil',
        filterDateCalendarButton: 'Velg dato',
        filterDateNavigateBackward: 'Tilbake',
        filterDateNavigateForward: 'Fram',
        filterDateErrorDateFormat: 'Datoen er oppgitt på feil format',
        filterDateErrorBeforeMinDate: 'Fra-dato kan ikke være senere enn til-dato',
        filterDateErrorAfterMaxDate: 'Fra-dato kan ikke være senere enn til-dato',
        validationNotAllowed: 'er ikke tillatt',
        formRequiredErrorMessage: 'Du må fylle ut dette feltet',
        deleteAttachmentText: 'Slett',
        autoSuggestLoadError: 'Teknisk feil',
        autosuggestNoSuggestions: 'Ingen treff på "{0}". Prøv med et annet ord eller sjekk for skrivefeil.',
        stringOverMaxLengthError: 'Du har skrevet for mange tegn. Gjør teksten kortere.',
        maxLengthText: 'Maksimum {0} tegn',
        chooseFilesText: 'Velg filer',
        skipLinkText: 'Hopp til navigator',
        clearDate: 'Fjern dato',
        calendarLabel: 'Kalender',
        closeDatePicker: 'Lukk',
        focusStartDate: 'Bruk kalenderen og velg dato.',
        jumpToPrevMonth: 'Gå bakover til forrige måned',
        jumpToNextMonth: 'Gå fremover til neste måned',
        keyboardShortcuts: 'Tastatursnarveier',
        showKeyboardShortcutsPanel: 'Åpne panelet med tastatursnarveier',
        hideKeyboardShortcutsPanel: 'Lukk panelet med tastatursnarveier',
        enterKey: 'Enter tast',
        leftArrowRightArrow: 'Høyre og venstre piltast',
        upArrowDownArrow: 'Opp og ned piltast',
        pageUpPageDown: 'Side opp og Side ned tast',
        homeEnd: 'Hjem og Slutt tast',
        escape: 'Escape tast',
        questionMark: 'Spørsmålstegn',
        openThisPanel: 'Åpne dette panelet',
        selectFocusedDate: 'Velg datoen som har fokus',
        moveFocusByOneDay: 'Flytt en dag bakover (venstre) og fremover (høyre)',
        moveFocusByOneWeek: 'Flytt en uke bakover (opp) og fremover (ned)',
        moveFocusByOneMonth: 'Skifte måned',
        moveFocustoStartAndEndOfWeek: 'Gå til første eller siste dag av uken',
        returnFocusToInput: 'Gå tilbake til datoen i inputfeltet',
        year_field_invalid: 'Du må skrive inn et gyldig årstall',
        year_field_maxdate: 'Årstall er etter det eldste tillatte år',
        year_field_mindate: 'Årstall er før det minste tillatte år',
        year_field_required: 'Årstall er påkrevd',
        yearmonth_field_invalid: 'Ugyldig verdi',
        yearmonth_field_invalid_year: 'Du må skrive inn et gyldig årstall',
        yearmonth_field_maxdate: 'Tidspunkt er etter eldste tillatte tidspunkt',
        yearmonth_field_mindate: 'Tidspunkt er før minste tillatte tidspunkt',
        yearmonth_field_month_placeholder: 'Velg måned',
        yearmonth_field_required: 'Årstall og måned er påkrevd',
        yearmonth_field_year_placeholder: 'Velg år',
        adresseKomponent_header: 'Hvem er mottaker av skjemaet?',
        adresseKomponent_skjemaSendesTil: 'Skjemaet sendes til:',
        adresseKomponent_sublabel: 'Du må velge mottaker før du sender skjemaet.',
        adresseKomponent_velgAvdeling: 'Velg avdeling',
        adresseKomponent_velgHelseforetak: 'Velg helseforetak',
        adresseKomponent_velgHelseregion: 'Velg helseregion',
        adresseKomponent_velgSykehus: 'Velg sykehus',
        adresseKomponent_velgKlinikk: 'Velg klinikk',
        adresseKomponent_velgSeksjon: 'Velg seksjon',
        adresseKomponent_velgSengepost: 'Velg sengepost',
        adresseKomponent_velgPoliklinikk: 'Velg poliklinikk',
        adresseKomponent_velgTjeneste: 'Velg behandlingssted',
        adresseKomponent_feilmelding: 'Du må velge en mottaker',
        adresseKomponent_loadError: 'Teknisk feil: kunne ikke laste liste over mottakere',
    };
};

const getReceiverComponentTestData = (selectedReceiverEndpoint) => {
    return [
        {
            OrgenhetId: 1,
            Navn: 'Helse Sør-Øst',
            EnhetType: 1,
            EndepunktId: null,
            UnderOrgenheter: [
                {
                    OrgenhetId: 11,
                    Navn: 'Ahus',
                    EnhetType: 2,
                    EndepunktId: 'TEST-AHUS',
                    UnderOrgenheter: null,
                },
            ],
        },
        {
            OrgenhetId: 2,
            Navn: 'Helse vest',
            EnhetType: 1,
            EndepunktId: null,
            UnderOrgenheter: [
                {
                    OrgenhetId: 22,
                    Navn: 'Haukeland sykehus',
                    EnhetType: 2,
                    EndepunktId: 'TEST-HAUKELAND',
                    UnderOrgenheter: null,
                },
            ],
        },
        ...(selectedReceiverEndpoint && [
            {
                OrgenhetId: 999,
                Navn: `Test receiver with endpoint = Endpoint/${selectedReceiverEndpoint}`,
                EnhetType: 5,
                EndepunktId: selectedReceiverEndpoint,
                UnderOrgenheter: null,
            },
        ]),
    ];
};

const generateSectionContent = (header, content) => {
    return content.length > 0 ? (
        <>
            <h2>{header}</h2>
            <div>
                {content.map((x, index) => (
                    <p
                        key={index}
                        dangerouslySetInnerHTML={{
                            __html: x,
                        }}
                    ></p>
                ))}
            </div>
        </>
    ) : null;
};

const getSidebarElements = (questionnaire) => {
    const sidebarData = getSidebarSections(questionnaire);

    const seksjonerFraSkjema = {
        'SOT-1': [],
        'SOT-2': [],
        'SOT-3': [],
    };

    sidebarData.forEach((x) => {
        if (x.item.code && x.item.code.length > 0 && x.item.code[0].code) {
            if (seksjonerFraSkjema[x.item.code[0].code]) {
                seksjonerFraSkjema[x.item.code[0].code].push(x.markdownText);
            }
        }
    });

    return seksjonerFraSkjema;
};

const Container = (props) => {
    const [responseJson, setResponseJson] = React.useState('');
    const [isSidebarViewEnabled, setIsSidebarViewEnabled] = React.useState(false);

    const questionnaire = JSON.parse(props.questionnaireString);
    const sidebarData = getSidebarElements(questionnaire);

    const resources = getResources(props.language);

    return (
        <div className="page_skjemautfyller">
            {responseJson && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        overflow: 'auto',
                        backgroundColor: '#fff',
                        zIndex: 100,
                    }}
                >
                    <div>QuestionnaireResponse basert på det som er krysset av:</div>
                    <p>{JSON.stringify(responseJson)}</p>
                    <button
                        onClick={() => {
                            setResponseJson('');
                        }}
                    >
                        Tilbake til skjemautfyller
                    </button>
                </div>
            )}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    padding: 8,
                    backgroundColor: '#fff',
                    zIndex: 90,
                    transition: 'transform .5s ease,-webkit-transform .5s ease',
                    width: '27.5rem',
                    borderLeft: '2px #AAA solid',
                    transform: isSidebarViewEnabled ? 'translateX(0)' : 'translateX(100%)',
                }}
            >
                <button
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: '-38px',
                        padding: '0 9px',
                        fontSize: '32px',
                        backgroundColor: '#fff',
                        border: '2px #AAA solid',
                        borderRightWidth: 0,
                        cursor: 'pointer',
                    }}
                    onClick={() => setIsSidebarViewEnabled(!isSidebarViewEnabled)}
                >
                    ?
                </button>
                {isSidebarViewEnabled && (
                    <div
                        style={{
                            overflow: 'auto',
                            height: '100%',
                        }}
                    >
                        {generateSectionContent('Alternativer for utfylling', sidebarData['SOT-1'])}
                        {generateSectionContent('Veiledning og ansvarlig', sidebarData['SOT-2'])}
                        {generateSectionContent('Behandling hos mottaker', sidebarData['SOT-3'])}
                    </div>
                )}
            </div>

            <h1>{questionnaire.title}</h1>
            <SkjemautfyllerContainer
                authorized
                blockSubmit={false}
                onCancel={() => {
                    /* ikke implementert enda */
                }}
                onSave={(questionnaireResponse) => {
                    setResponseJson(questionnaireResponse);
                }}
                sticky={false}
                onSubmit={() => {
                    /* ikke implementert enda */
                }}
                resources={resources}
                loginButton={<button />}
                onRequestHelpButton={(_item, _helpItem, _helpType, _helpText, opening) => {
                    return (
                        <button
                            type="button"
                            title={resources ? resources.helpButtonTooltip : undefined}
                            className="atom_inline-functionbutton"
                            aria-expanded={opening}
                        />
                    );
                }}
                onRequestHelpElement={(_item, _helpItem, _helpType, helpText, opening) => {
                    const collapseClasses = classNames({
                        page_skjemautfyller__helpComponent: true,
                        'page_skjemautfyller__helpComponent--open': opening,
                    });
                    return (
                        <Collapse isOpened={opening}>
                            <div className={collapseClasses} dangerouslySetInnerHTML={{ __html: helpText }} />
                        </Collapse>
                    );
                }}
                questionnaire={questionnaire}
                fetchReceivers={(successCallback) => {
                    successCallback(getReceiverComponentTestData(props.selectedReceiverEndpoint));
                }}
            />
        </div>
    );
};

export default Container;
