

// For old devices!
if( typeof(NodeList.prototype.forEach) === 'undefined' ) {
	NodeList.prototype.forEach = Array.prototype.forEach;
}

var i18n = {
'en': {
	'yes': 'yes', 'no': 'no',

	'm3uSource': 'URL to m3u(8)-file',
	'chooseLang': 'Language',
	'usbLoadLabel': 'Playlist from USB',
	'openUsbButton': 'browse USB',
	'localLoadLabel': 'Local m3u(8)-file',
	'openExplorerButton': 'open explorer',
	'openHistoryButton': 'history',
	'downloadButton': 'Proceed',
	'saveButton': 'save and play',
	'deleteButton': 'delete playlist',
	'generalSettingsButton': 'general settings',
	'advancedSettingsButton': 'advanced settings',

	'closeAppHint': 'Do you want to close this app?',
	'hideModalHint': 'Press any button to close this message.',
	'playlistDownloaded': 'channels successfully downloaded.<br>%i channels loaded.',
	'channelsLoaded': 'channels',

	'redButtonHint': '<span class="red-button">A</span> search',
	'helpHint': 'Press <span class="red-button">A</span>-button to insert demo channel list.<br><br>Press INFO on the remote control at any time for a user guide.',

	'supportContact': 'For more information, visit http://iptvacc.rf.gd/en',
	'supportContactLinked': 'For more information, visit <a href="http://iptvacc.rf.gd/en/" target="_blank">http://iptvacc.rf.gd/en</a>',
	'donate': 'If you like this app, please support me with a little donation.<br>Visit <b class="NOBR">http://iptvacc.rf.gd</b><br>or via QR-code.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (credit card)',
	'downloadM3uStatus': 'Loading channels. Please wait a moment.',
	'usbMountedStatus': 'USB mounted',

	'connectionLost': 'Network connection lost. Please check your network.',
	'checkM3uError': 'Could not load channels. HTTP status-code: ',
	'checkM3uFileError': 'Not a valid m3u(8)-channels. Please check file.',
	'checkM3uDownloadError': 'Could not load channels. Please check the URL.',
	'checkM3uDownloadSizeError': 'The playlist contains too many channels. Please reduce them to max 20.000 channels.',
	'checkM3uTimeoutError': 'Timeout occurred while loading your channels. Please try again.',
	'errorNoUsbMounted': 'No USB storage detected. Please connect a USB storage device first.',
	'errorNoM3uUrl': 'Please enter a valid URL to your m3u(8) channels.',
	'channelLoadError': 'This channel is not available at the moment. Please try again later.',
	'channelLoadConnectionFailed': '(Connection to the stream failed.)',
	'channelNotSupportedFile': 'This channel cannot be loaded due to an incompatible format.',
	'errorNoFavouritesYet': 'You don\'t have any favorite channels yet. Press the YELLOW button to favorite a channel.',
	'errorNoPlaylistHistory': 'No playlist in history yet. Please insert a URL in the field below.',

	// Menu
	'searchPlaceholder': 'Search',
	'allChannels': 'All channels',
	'favourites': '⭐ Favorites',
	'groups': 'Groups',
	'channels': 'Channels',
	'settings_menu': 'Settings',
	'epg_menu': 'EPG',
	'guide_menu': 'Guide',

	'guideControlsHeadline': 'Controls',

	// Advanced Settings
	'tabGeneralSettings': 'General Settings',
	'tabAdvancedSettings': 'Advanced Settings',
	'chooseMousewheel': 'Mousewheel',
	'volumeSetting': 'Volume up/down',
	'channelSetting': 'Channel forward/back',
	'reloadPlaylistOnStart': 'Download channels on each start',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'loading...',
	'audioTrack': 'Audio track',
	'subtitleTrack': 'Subtitle track',
	'channelSettings': 'Channel settings',
	'channelSettingSubtitle': 'subtitle / audio',
	'channelSettingFavs': 'put channel in favourites',
	'channelSettingPlayback': 'show playback controls',
	'channelSettingAudioDefault': 'default track',
	'channelSettingSubNoTrack': 'not available',
	'channelSettingSubOff': 'disable',
	'channelSettingResolution': 'resolution',

	// EPG
	'epgSource': 'EPG source',
	'usePlaylistEpgUrl': 'Use EPG source from your playlist instead?',
	'epgTimeShift': 'EPG Timeshift',
	'epgGrabInterval': 'EPG grab interval',
	'downloadEpgButton': 'download EPG now',
	'noEpgForChannel': 'No EPG for this channel',
	'noEpgUrlGiven': 'No EPG URL set',
	'epgQuotaExceededError': 'Not enough free space to save EPG data. Please free up some space. For example by deleting not used apps.',
	'epgNotCompatibleWithPlaylist': 'Your playlist is not compatible with this EGP-URL.',
	'epgIsDownloading': 'Loading EPG ...',
	'epgChannelsProcessed': 'channels: ',
	'epgProgramsProcessed': 'programs: ',
	'epgNow': 'Now',
	'epgAfter': 'After',

},
'es': {
	'yes': 'sí', 'no': 'no',

	'm3uSource': 'URL del archivo m3u(8)',
	'chooseLang': 'Lenguaje',
	'usbLoadLabel': 'Lista de canales desde USB',
	'openUsbButton': 'navegar por USB',
	'localLoadLabel': 'Archivo m3u(8) local',
	'openExplorerButton': 'abierto explorador',
	'openHistoryButton': 'historia',
	'downloadButton': 'descargar archivo',
	'saveButton': 'guardar y jugar',
	'deleteButton': 'eliminar',
	'generalSettingsButton': 'ajustes generales',
	'advancedSettingsButton': 'avanzado',

	'closeAppHint': '¿Quieres cerrar esta aplicación?',
	'hideModalHint': 'Presione cualquier botón para cerrar este mensaje.',
	'playlistDownloaded': 'La lista de reproducción se descargó correctamente.<br>%i canales cargados.',
	'channelsLoaded': 'canales',

	'redButtonHint': '<span class="red-button">A</span> buscar',
	'helpHint': 'Presione el botón <span class="red-button">A</span> para insertar la lista de canales de demostración.<br><br>Presione INFO en el control remoto en cualquier momento para obtener una guía del usuario.',

	'supportContact': 'Para más información, visite http://iptvacc.rf.gd/es',
	'supportContactLinked': 'Para más información, visite <a href="http://iptvacc.rf.gd/es/" target="_blank">http://iptvacc.rf.gd/es</a>',
	'donate': 'Si te gusta esta aplicación, apóyame con una pequeña donación.<br>Visita <b class="NOBR">http://iptvacc.rf.gd</b><br>o a través del código QR.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (tarjeta de crédito)',
	'downloadM3uStatus': 'Cargando lista de reproducción. Por favor, espere un momento.',
	'usbMountedStatus': 'USB mounted',

	'connectionLost': 'Se perdió la conexión de red. Por favor, compruebe su red.',
	'checkM3uError': 'No se pudo cargar la lista de reproducción. Código de estado HTTP: ',
	'checkM3uFileError': 'No es una lista de reproducción m3u(8) válida. Por favor verifique el archivo.',
	'checkM3uDownloadError': 'No se pudo cargar la lista de reproducción. Por favor, compruebe la URL.',
	'checkM3uDownloadSizeError': 'La playlist contiene demasiados canales. Redúzcalos a un máximo de 20.000 canales.',
	'checkM3uTimeoutError': 'Se agotó el tiempo de espera mientras cargaba su lista de reproducción. Inténtalo de nuevo.',
	'errorNoUsbMounted': 'No se detectó ninguna memoria USB. Primero conecte una memoria USB.',
	'errorNoM3uUrl': 'Ingrese una URL válida para su lista de reproducción m3u(8).',
	'channelLoadError': 'Este canal no está disponible en este momento. Por favor, inténtelo de nuevo más tarde.',
	'channelLoadConnectionFailed': '(Error en la conexión a la transmisión).',
	'channelNotSupportedFile': 'Este canal no se puede cargar debido a un formato incompatible.',
	'errorNoFavouritesYet': 'Aún no tienes ningún canal favorito. Presiona el botón amarillo para marcar un canal como favorito.',
	'errorNoPlaylistHistory': 'No hay lista de reproducción en la historia todavía. Por favor inserte una URL en el campo de abajo.',

	// Menu
	'searchPlaceholder': 'Búsqueda',
	'allChannels': 'Todos los canales',
	'favourites': '⭐ Canales favoritos',
	'groups': 'Grupos',
	'channels': 'Canales',
	'settings_menu': 'Ajustes',
	'epg_menu': 'EPG',
	'guide_menu': 'Guía',

	'guideControlsHeadline': 'Control',

	// Advanced Settings
	'tabGeneralSettings': 'Configuración general',
	'tabAdvancedSettings': 'Configuración avanzada',
	'chooseMousewheel': 'Mousewheel',
	'volumeSetting': 'Subir/bajar volumen',
	'channelSetting': 'Canal arriba/abajo',
	'reloadPlaylistOnStart': 'Descargar lista de reproducción en cada inicio',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'cargando...',
	'audioTrack': 'Pista de audio',
	'subtitleTrack': 'Pista de subtítulos',
	'channelSettings': 'Configuración de canales',
	'channelSettingSubtitle': 'subtítulos / audio',
	'channelSettingFavs': 'poner canal en favoritos',
	'channelSettingPlayback': 'mostrar controles de reproducción',
	'channelSettingAudioDefault': 'pista predeterminada',
	'channelSettingSubNoTrack': 'no disponible',
	'channelSettingSubOff': 'deshabilitar',
	'channelSettingResolution': 'resolución',

	// EPG
	'epgSource': 'fuente EPG',
	'usePlaylistEpgUrl': '¿Usar la fuente EPG de tu lista de reproducción en su lugar?',
	'epgTimeShift': 'EPG Timeshift',
	'epgGrabInterval': 'Intervalo de captura de EPG',
	'downloadEpgButton': 'descargar EPG ahora',
	'noEpgForChannel': 'No hay EPG para este canal',
	'noEpgUrlGiven': 'No se ha establecido ninguna URL de EPG',
	'epgQuotaExceededError': 'No hay suficiente espacio libre para guardar datos EPG. Libere algo de espacio. Por ejemplo, eliminando aplicaciones no utilizadas.',
	'epgNotCompatibleWithPlaylist': 'Su lista de reproducción no es compatible con este EGP-URL.',
	'epgIsDownloading': 'Cargando EPG ...',
	'epgChannelsProcessed': 'canales: ',
	'epgProgramsProcessed': 'programas: ',
	'epgNow': 'Ahora',
	'epgAfter': 'Después',

},
'it': {
	'yes': 'sì', 'no': 'no',

	'm3uSource': 'URL al file m3u(8)',
	'chooseLang': 'Lingua',
	'usbLoadLabel': 'Lista canali da USB',
	'openUsbButton': 'sfoglia USB',
	'localLoadLabel': 'File m3u(8) locale',
	'openExplorerButton': 'apri esploratore',
	'openHistoryButton': 'storia',
	'downloadButton': 'ottieni il file',
	'saveButton': 'salva e gioca',
	'deleteButton': 'cancella',
	'generalSettingsButton': 'impostazioni generali',
	'advancedSettingsButton': 'avanzato',

	'closeAppHint': 'Vuoi chiudere questa app?',
	'hideModalHint': 'Premere un pulsante qualsiasi per chiudere questo messaggio.',
	'playlistDownloaded': 'Playlist scaricata con successo.<br>%i canali caricati.',
	'channelsLoaded': 'canali',

	'redButtonHint': '<span class="red-button">A</span> ricerca',
	'helpHint': 'Premi il pulsante <span class="red-button">A</span> per inserire l\'elenco dei canali demo.<br><br>Premere INFO sul telecomando in qualsiasi momento per ottenere una guida per l\'utente.',

	'supportContact': 'Per ulteriori informazioni, visita http://iptvacc.rf.gd/it',
	'supportContactLinked': 'Per ulteriori informazioni, visita <a href="http://iptvacc.rf.gd/it/" target="_blank">http://iptvacc.rf.gd/it</a>',
	'donate': 'Se ti piace questa app, supportami con una piccola donazione.<br>Visita <b class="NOBR">http://iptvacc.rf.gd</b><br>o tramite QR-code.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (carta di credito)',
	'downloadM3uStatus': 'Caricamento playlist. Per favore aspetta un momento.',
	'usbMountedStatus': 'USB mounted',

	'connectionLost': 'Connessione di rete persa. Si prega di controllare la rete.',
	'checkM3uError': 'Impossibile caricare la playlist. Codice di stato HTTP: ',
	'checkM3uFileError': 'Non è una playlist m3u(8) valida. Si prega di controllare il file.',
	'checkM3uDownloadError': 'Impossibile caricare la playlist. Si prega di controllare l\'URL.',
	'checkM3uDownloadSizeError': 'La playlist contiene troppi canali. Si prega di ridurli a un massimo di 20.000 canali.',
	'checkM3uTimeoutError': 'Si è verificato un timeout durante il caricamento della playlist. Per favore riprova.',
	'errorNoUsbMounted': 'Nessuna memoria USB rilevata. Si prega di collegare prima una memoria USB.',
	'errorNoM3uUrl': 'Inserisci un URL valido per la tua playlist m3u(8).',
	'channelLoadError': 'Questo canale non è al momento disponibile. Per favore riprova più tardi.',
	'channelLoadConnectionFailed': '(Connessione al flusso non riuscita.)',
	'channelNotSupportedFile': 'Questo canale non può essere caricato a causa di un formato incompatibile.',
	'errorNoFavouritesYet': 'Non hai ancora nessun canale preferito. Premi il pulsante giallo per aggiungere un canale ai preferiti.',
	'errorNoPlaylistHistory': 'Ancora nessuna playlist nella cronologia. Inserisci un URL nel campo sottostante.',

	// Menu
	'searchPlaceholder': 'Ricerca',
	'allChannels': 'Tutti i canali',
	'favourites': '⭐ Preferiti',
	'groups': 'Gruppi',
	'channels': 'Canali',
	'settings_menu': 'Impostazioni',
	'epg_menu': 'EPG',
	'guide_menu': 'Guida',

	'guideControlsHeadline': 'Controllo',

	// Advanced Settings
	'tabGeneralSettings': 'Impostazioni Generali',
	'tabAdvancedSettings': 'Impostazioni avanzate',
	'chooseMousewheel': 'Mousewheel',
	'volumeSetting': 'Volume su/giù',
	'channelSetting': 'Canale su/giù',
	'reloadPlaylistOnStart': 'Scarica playlist a ogni avvio',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'caricamento in corso...',
	'audioTrack': 'Traccia audio',
	'subtitleTrack': 'Traccia sottotitoli',
	'channelSettings': 'Impostazioni canale',
	'channelSettingSubtitle': 'sottotitoli / audio',
	'channelSettingFavs': 'metti il canale nei preferiti',
	'channelSettingPlayback': 'mostra i controlli di riproduzione',
	'channelSettingAudioDefault': 'traccia predefinita',
	'channelSettingSubNoTrack': 'non disponibile',
	'channelSettingSubOff': 'disattiva',
	'channelSettingResolution': 'risoluzione',

	// EPG
	'epgSource': 'Fonte EPG',
	'usePlaylistEpgUrl': 'Utilizzare invece la sorgente EPG dalla tua playlist?',
	'epgTimeShift': 'Timeshift EPG',
	'epgGrabInterval': 'Intervallo di presa EPG',
	'downloadEpgButton': 'scarica subito l\'EPG',
	'noEpgForChannel': 'Nessun EPG per questo canale',
	'noEpgUrlGiven': 'Nessun URL EPG impostato',
	'epgQuotaExceededError': 'Spazio libero insufficiente per salvare i dati EPG. Si prega di liberare spazio. Ad esempio eliminando le app non utilizzate.',
	'epgNotCompatibleWithPlaylist': 'La tua playlist non è compatibile con questo URL EGP.',
	'epgIsDownloading': 'Caricamento dell\'EPG ...',
	'epgChannelsProcessed': 'canali: ',
	'epgProgramsProcessed': 'programmi: ',
	'epgNow': 'Adesso',
	'epgAfter': 'Dopo di che',

},
'fr': {
	'yes': 'oui', 'no': 'non',

	'm3uSource': 'URL vers le fichier m3u(8)',
	'chooseLang': 'Langue',
	'usbLoadLabel': 'Liste des chaînes depuis USB',
	'openUsbButton': 'parcourir USB',
	'localLoadLabel': 'Fichier m3u(8) local',
	'openExplorerButton': 'ouvrir l\'explorateur',
	'openHistoryButton': 'l\'histoire',
	'downloadButton': 'Obtenir le fichier',
	'saveButton': 'enregistrer et jouer',
	'deleteButton': 'effacer',
	'generalSettingsButton': 'réglages généraux',
	'advancedSettingsButton': 'Avancée',

	'closeAppHint': 'Voulez-vous fermer cette application?',
	'hideModalHint': 'Appuyez sur n\'importe quel bouton pour fermer ce message.',
	'playlistDownloaded': 'La liste de lecture a été téléchargée avec succès.<br>%i chaînes chargées.',
	'channelsLoaded': 'chaînes',

	'redButtonHint': '<span class="red-button">A</span> chercher',
	'helpHint': 'Appuyez sur le bouton <span class="red-button">A</span> pour insérer la liste des chaînes de démonstration.<br><br>Appuyez sur INFO sur la télécommande à tout moment pour un guide de l\'utilisateur.',

	'supportContact': 'Pour plus d\'informations, visitez http://iptvacc.rf.gd/fr',
	'supportContactLinked': 'Pour plus d\'informations, visitez <a href="http://iptvacc.rf.gd/fr/" target="_blank">http://iptvacc.rf.gd/fr</a>',
	'donate': 'Si vous aimez cette application, merci de me soutenir avec un petit don.<br>Visitez <b class="NOBR">http://iptvacc.rf.gd</b><br>ou via QR-code.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (carte de crédit)',
	'downloadM3uStatus': 'Chargement de la playlist. Patientez s\'il-vous-plait.',
	'usbMountedStatus': 'USB mounted',

	'connectionLost': 'Connexion réseau perdue. Veuillez vérifier votre réseau.',
	'checkM3uError': 'Impossible de charger la playlist. Code d\'état HTTP: ',
	'checkM3uFileError': 'Liste de lecture m3u(8) non valide. Veuillez vérifier le fichier.',
	'checkM3uDownloadError': 'Impossible de charger la playlist. Veuillez vérifier l\'URL.',
	'checkM3uDownloadSizeError': 'La playlist contient trop de canaux. Veuillez les réduire à 20.000 canaux maximum.',
	'checkM3uTimeoutError': 'Un délai d\'attente s\'est produit lors du chargement de votre playlist. Veuillez réessayer.',
	'errorNoUsbMounted': 'Aucune mémoire USB détectée. Veuillez d\'abord connecter une mémoire USB.',
	'errorNoM3uUrl': 'Veuillez saisir une URL valide vers votre liste de lecture m3u(8).',
	'channelLoadError': 'Cette chaîne n\'est pas disponible pour le moment. Veuillez réessayer plus tard.',
	'channelLoadConnectionFailed': '(La connexion au flux a échoué.)',
	'channelNotSupportedFile': 'Impossible de charger cette chaîne en raison d\'un format incompatible.',
	'errorNoFavouritesYet': 'Vous n\'avez pas encore de chaînes préférées. Appuyez sur le bouton jaune pour ajouter une chaîne à vos favoris.',
	'errorNoPlaylistHistory': 'Pas encore de playlist dans l\'historique. Veuillez insérer une URL dans le champ ci-dessous.',

	// Menu
	'searchPlaceholder': 'Recherche',
	'allChannels': 'Toutes les chaînes',
	'favourites': '⭐ Favoris',
	'groups': 'Groupes',
	'channels': 'Canaux',
	'settings_menu': 'Réglages',
	'epg_menu': 'EPG',
	'guide_menu': 'Guide',

	'guideControlsHeadline': 'Contrôle',

	// Advanced Settings
	'tabGeneralSettings': 'Paramètres généraux',
	'tabAdvancedSettings': 'Paramètres avancés',
	'chooseMousewheel': 'Mousewheel',
	'volumeSetting': 'Volume haut/bas',
	'channelSetting': 'Chaîne haut/bas',
	'reloadPlaylistOnStart': 'Télécharger la playlist à chaque démarrage',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'chargement...',
	'audioTrack': 'Piste audio',
	'subtitleTrack': 'Piste de sous-titres',
	'channelSettings': 'Paramètres de la chaîne',
	'channelSettingSubtitle': 'sous-titre / audio',
	'channelSettingFavs': 'mettre la chaîne en favoris',
	'channelSettingPlayback': 'afficher les commandes de lecture',
	'channelSettingAudioDefault': 'piste par défaut',
	'channelSettingSubNoTrack': 'non disponible',
	'channelSettingSubOff': 'désactiver',
	'channelSettingResolution': 'résolution',

	// EPG
	'epgSource': 'Source EPG',
	'usePlaylistEpgUrl': 'Utiliser la source EPG de votre liste de lecture à la place ?',
	'epgTimeShift': 'Décalage EPG',
	'epgGrabInterval': 'Intervalle de capture EPG',
	'downloadEpgButton': 'télécharger EPG maintenant',
	'noEpgForChannel': 'Pas d\'EPG pour cette chaîne',
	'noEpgUrlGiven': 'Aucune URL EPG définie',
	'epgQuotaExceededError': 'Espace libre insuffisant pour enregistrer les données EPG. Veuillez libérer de l\'espace. Par exemple en supprimant les applications non utilisées.',
	'epgNotCompatibleWithPlaylist': 'Votre liste de lecture n\'est pas compatible avec cette URL EGP.',
	'epgIsDownloading': 'Chargement de l\'EPG ...',
	'epgChannelsProcessed': 'canaux: ',
	'epgProgramsProcessed': 'programmes: ',
	'epgNow': 'Maintenant',
	'epgAfter': 'Après cela',

},
'de': {
	'yes': 'ja', 'no': 'nein',

	'm3uSource': 'URL zur m3u(8)-Datei',
	'chooseLang': 'Spache',
	'usbLoadLabel': 'Playlist von USB laden',
	'openUsbButton': 'USB durchsuchen',
	'localLoadLabel': 'Lokale m3u(8)-Datei',
	'openExplorerButton': 'Explorer öffnen',
	'openHistoryButton': 'Verlauf',
	'downloadButton': 'Datei laden',
	'saveButton': 'abspielen',
	'deleteButton': 'löschen',
	'generalSettingsButton': 'Haupteinstellungen',
	'advancedSettingsButton': 'Fortgeschritten',

	'closeAppHint': 'Möchtest du die APP beenden?',
	'hideModalHint': 'Drücke eine beliebige Taste um diesen Hinweis zu schließen.',
	'playlistDownloaded': 'Die Playliste wurde erfolgreich heruntergeladen.<br>%i Kanäle wurden geladen.',
	'channelsLoaded': 'Kanäle',

	'redButtonHint': '<span class="red-button">A</span> suchen',
	'helpHint': 'Drücke <span class="red-button">A</span> um eine Demo Kanalliste einzufügen.<br><br>Drücke jederzeit INFO auf der Fernbedienung für eine ausführliche Bedienungsanleitung.',

	'supportContact': 'Mehr Informationen unter http://iptvacc.rf.gd/de',
	'supportContactLinked': 'Mehr Informationen unter <a href="http://iptvacc.rf.gd/de/" target="_blank">http://iptvacc.rf.gd/de</a>',
	'donate': 'Wenn dir diese App gefällt, bitte unterstütze mich mit einer kleinen Spende.<br>Besuche <b class="NOBR">http://iptvacc.rf.gd</b><br>oder über QR-Code.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (Kreditkarte)',
	'downloadM3uStatus': 'Playlist wird geladen. Bitte warte einen Moment.',
	'usbMountedStatus': 'USB mounted',

	'connectionLost': 'Kein Internetzugang. Bitte prüfe dein Netzwerk.',
	'checkM3uError': 'Playlist konnte nicht geladen werden. HTTP Status-Code: ',
	'checkM3uFileError': 'Keine gültige m3u(8)-Playlist. Bitte Datei prüfen.',
	'checkM3uDownloadError': 'Playlist konnte nicht geladen werden. Bitte URL prüfen.',
	'checkM3uDownloadSizeError': 'Die Playlist enthält zu viele Kanäle. Bitte reduziere diese auf maximal 20.000 Kanäle.',
	'checkM3uTimeoutError': 'Zeitüberschreitung beim Laden der Playlist. Bitte erneut versuchen.',
	'errorNoUsbMounted': 'Kein USB Speicher erkannt. Bitte schließe zuerst ein USB Speicher an.',
	'errorNoM3uUrl': 'Bitte gebe eine gültige URL zu deiner m3u(8)-Playlist an.',
	'channelLoadError': 'Dieser Kanal ist zurzeit nicht erreichbar. Bitte versuche es später nochmal.',
	'channelLoadConnectionFailed': '(Verbindung zum Stream fehlgeschlagen.)',
	'channelNotSupportedFile': 'Dieser Kanal kann wegen eines inkompatiblen Formats nicht geladen werden.',
	'errorNoFavouritesYet': 'Du hast noch keine Kanal-Favoriten. Drücke die gelbe Taste um ein Kanal zu favorisieren.',
	'errorNoPlaylistHistory': 'Noch keine Playliste im Verlauf. Bitte gebe eine URL in das Feld unten ein.',

	// Menu
	'searchPlaceholder': 'Suche',
	'allChannels': 'Alle Kanäle',
	'favourites': '⭐ Favoriten',
	'groups': 'Gruppen',
	'channels': 'Kanäle',
	'settings_menu': 'Einstellungen',
	'epg_menu': 'EPG',
	'guide_menu': 'Anleitung',

	'guideControlsHeadline': 'Steuerung',

	// Advanced Settings
	'tabGeneralSettings': 'Haupteinstellungen',
	'tabAdvancedSettings': 'Fortgeschritten',
	'chooseMousewheel': 'Mausrad',
	'volumeSetting': 'Lautstärke leiser/lauter',
	'channelSetting': 'Kanal vor/zurück',
	'reloadPlaylistOnStart': 'Playlist bei jedem Start herunterladen',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'wird geladen...',
	'audioTrack': 'Audio Tonspur',
	'subtitleTrack': 'Untertitel',
	'channelSettings': 'Kanaleinstellungen',
	'channelSettingSubtitle': 'Untertitel / Audio',
	'channelSettingFavs': 'Kanal zu Favoriten hinzufügen',
	'channelSettingPlayback': 'Wiedergabesteuerung anzeigen',
	'channelSettingAudioDefault': 'Standard',
	'channelSettingSubNoTrack': 'nicht verfügbar',
	'channelSettingSubOff': 'deaktivieren',
	'channelSettingResolution': 'Auflösung',

	// EPG
	'epgSource': 'EPG Quelle',
	'usePlaylistEpgUrl': 'EPG Quelle aus der Playlist stattdessen verwenden?',
	'epgTimeShift': 'EPG Zeitversatz',
	'epgGrabInterval': 'EPG Aktualisierungsintervall',
	'downloadEpgButton': 'EPG jetzt laden',
	'noEpgForChannel': 'Kein EPG für diesen Kanal',
	'noEpgUrlGiven': 'Keine EPG URL konfiguriert',
	'epgQuotaExceededError': 'Nicht genügend freier Speicherplatz zum Speichern von EPG-Daten vorhanden. Bitte gebe etwas Platz frei. Zum Beispiel durch das Löschen nicht genutzter Apps.',
	'epgNotCompatibleWithPlaylist': 'Deine Playlist ist nicht kompatiblel mit dieser EGP-URL.',
	'epgIsDownloading': 'EPG wird geladen...',
	'epgChannelsProcessed': 'Kanäle: ',
	'epgProgramsProcessed': 'Programme: ',
	'epgNow': 'Jetzt',
	'epgAfter': 'Danach',

},
'ru': {
	'yes': 'да', 'no': 'нет',

	'm3uSource': 'URL-адрес  m3u(8) файла',
	'chooseLang': 'язык',
	'usbLoadLabel': 'Загрузить плейлист с USB',
	'openUsbButton': 'просмотреть USB',
	'localLoadLabel': 'Локальный файл m3u(8)',
	'openExplorerButton': 'Файловый проводник',
	'openHistoryButton': 'история',
	'downloadButton': 'загрузить файл',
	'saveButton': 'стартовать',
	'deleteButton': 'удалять',
	'generalSettingsButton': 'Общие настройки',
	'advancedSettingsButton': 'Дополнительные настройки',

	'closeAppHint': 'Вы хотите закрыть это приложение?',
	'hideModalHint': 'Нажмите любую клавишу, чтобы закрыть это уведомление.',
	'playlistDownloaded': 'Плейлист успешно загружен.<br>Загружено %i каналов.',
	'channelsLoaded': 'каналов',

	'redButtonHint': '<span class="red-button">A</span> Поиск',
	'helpHint': 'Нажмите кнопку <span class="red-button">A</span>, чтобы вставить список демонстрационных каналов.<br><br>Нажмите INFO на пульте дистанционного управления в любой момент, чтобы открыть руководство пользователя.',

	'supportContact': 'Для получения дополнительной информации посетите http://iptvacc.rf.gd/ru',
	'supportContactLinked': 'Для получения дополнительной информации посетите <a href="http://iptvacc.rf.gd/ru/" target="_blank">http://iptvacc.rf.gd/ru</a>',
	'donate': 'Если вам нравится это приложение, поддержите меня небольшим пожертвованием.<br>Посетите <b class="NOBR">http://iptvacc.rf.gd</b><br>или с помощью QR-кода.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (кредитная карта)',
	'downloadM3uStatus': 'Плейлист загружается. Пожалуйста, подождите несколько секунд.',
	'usbMountedStatus': 'USB mounted',

	'connectionLost': 'Потеряно сетевое соединение. Пожалуйста, проверьте свою сеть.',
	'checkM3uError': 'Не удалось загрузить плейлист. Код состояния HTTP: ',
	'checkM3uFileError': 'Неверный m3u(8)-плейлист. Пожалуйста, проверьте файл.',
	'checkM3uDownloadError': 'Не удалось загрузить плейлист. Пожалуйста, проверьте URL-адрес',
	'checkM3uDownloadSizeError': 'В плейлисте слишком много каналов. Пожалуйста, уменьшите их до 20.000 каналов.',
	'checkM3uTimeoutError': 'Время загрузки плейлиста истекло. Пожалуйста, попробуйте еще раз.',
	'errorNoUsbMounted': 'USB-накопитель не распознается. Сначала подключите USB-накопитель.',
	'errorNoM3uUrl': 'Пожалуйста, введите URL вашего плейлиста m3u(8).',
	'channelLoadError': 'Этот канал сейчас недоступен. Пожалуйста, попробуйте позже.',
	'channelLoadConnectionFailed': '(Не удалось подключиться к потоку.)',
	'channelNotSupportedFile': 'Этот канал не может быть загружен из-за несовместимого формата.',
	'errorNoFavouritesYet': 'У вас пока нет избранных каналов. Нажмите ЖЕЛТУЮ кнопку, чтобы добавить канал в избранное.',
	'errorNoPlaylistHistory': 'Плейлиста в истории пока нет. Пожалуйста, вставьте URL в поле ниже.',

	// Menu
	'searchPlaceholder': 'Поиск',
	'allChannels': 'Все каналы',
	'favourites': '⭐ избранное',
	'groups': 'группы',
	'channels': 'каналы',
	'settings_menu': 'Настройки',
	'epg_menu': 'телегид',
	'guide_menu': 'Гид',

	'guideControlsHeadline': 'Клавиши',

	// Advanced Settings
	'tabGeneralSettings': 'Общие настройки',
	'tabAdvancedSettings': 'Дополнительные настройки',
	'chooseMousewheel': 'Колесо мыши',
	'volumeSetting': 'Увеличение/уменьшение громкости',
	'channelSetting': 'Канал вверх/вниз',
	'reloadPlaylistOnStart': 'Загружать плейлист при каждом запуске',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'загрузка...',
	'audioTrack': 'Аудиодорожка',
	'subtitleTrack': 'Дорожка субтитров',
	'channelSettings': 'Настройки канала',
	'channelSettingSubtitle': 'субтитры / аудио',
	'channelSettingFavs': 'поместить канал в избранное',
	'channelSettingPlayback': 'показать управление воспроизведением',
	'channelSettingAudioDefault': 'дорожка по умолчанию',
	'channelSettingSubNoTrack': 'недоступно',
	'channelSettingSubOff': 'отключить',
	'channelSettingResolution': 'разрешение',

	// EPG
	'epgSource': 'Источник ЭПП',
	'usePlaylistEpgUrl': 'Вместо этого использовать источник ЭПП из вашего плейлиста?',
	'epgTimeShift': 'ЭПП Таймшифт',
	'epgGrabInterval': 'Интервал захвата ЭПП',
	'downloadEpgButton': 'скачать ЭПП сейчас',
	'noEpgForChannel': 'Нет ЭПП для этого канала',
	'noEpgUrlGiven': 'Не задан URL-адрес ЭПП',
	'epgQuotaExceededError': 'Недостаточно свободного места для сохранения данных ЭПП. Пожалуйста, освободите место. Например, удалив неиспользуемые приложения.',
	'epgNotCompatibleWithPlaylist': 'Ваш плейлист несовместим с этим ЭПП-URL.',
	'epgIsDownloading': 'Загрузка ЭПП...',
	'epgChannelsProcessed': 'каналы: ',
	'epgProgramsProcessed': 'программы: ',
	'epgNow': 'Сейчас',
	'epgAfter': 'После этого',

},
'tr': {
	'yes': 'evet', 'no': 'hayır',

	'm3uSource': 'm3u(8)-dosyasının URL\'si',
	'chooseLang': 'Dil',
	'usbLoadLabel': 'USB\'den oynatma listesi',
	'openUsbButton': 'USB\'ye göz at',
	'localLoadLabel': 'Yerel m3u(8)-dosyası',
	'openExplorerButton': 'gezgini aç',
	'openHistoryButton': 'Tarih',
	'downloadButton': 'çalma listesi indir',
	'saveButton': 'kaydet ve oyna',
	'deleteButton': 'çalma listesini sil',
	'generalSettingsButton': 'Genel Ayarlar',
	'advancedSettingsButton': 'Gelişmiş Ayarlar',

	'closeAppHint': 'Bu uygulamayı kapatmak istiyor musunuz?',
	'hideModalHint': 'Bu mesajı kapatmak için herhangi bir düğmeye basın.',
	'playlistDownloaded': 'Oynatma listesi başarıyla indirildi.<br>%i kanal yüklendi.',
	'channelsLoaded': 'kanallar',

	'redButtonHint': '<span class="red-button">A</span> aramak',
	'helpHint': 'Demo kanal listesi eklemek için <span class="red-button">A</span>-düğmesine basın.<br><br>Kullanıcı kılavuzu için istediğiniz zaman uzaktan kumandadaki INFO\'a basın.',

	'supportContact': 'Daha fazla bilgi için http://iptvacc.rf.gd/tr adresini ziyaret edin.',
	'supportContactLinked': 'Daha fazla bilgi için <a href="http://iptvacc.rf.gd/tr/" target="_blank">http://iptvacc.rf.gd/tr</a> adresini ziyaret edin.',
	'donate': 'Bu uygulamayı beğendiyseniz, lütfen bana küçük bir bağışla destek olun.<br><b class="NOBR">http://iptvacc.rf.gd</b><br>veya QR kodu ile ziyaret edin.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (kredi kartı)',
	'downloadM3uStatus': 'Oynatma listesi yükleniyor. Bir süre bekleyin lütfen.',
	'usbMountedStatus': 'USB takılı',

	'connectionLost': 'Ağ bağlantısı kesildi. Lütfen ağınızı kontrol edin.',
	'checkM3uError': 'Oynatma listesi yüklenemedi. HTTP durum kodu: ',
	'checkM3uFileError': 'Geçerli bir m3u(8)-çalma listesi değil. Lütfen dosyayı kontrol edin.',
	'checkM3uDownloadError': 'Oynatma listesi yüklenemedi. Lütfen URL\'yi kontrol edin.',
	'checkM3uDownloadSizeError': 'Oynatma listesi çok fazla kanal içeriyor. Lütfen bunları maksimum 20.000 kanala düşürün.',
	'checkM3uTimeoutError': 'Oynatma listeniz yüklenirken zaman aşımı oluştu. Lütfen tekrar deneyin.',
	'errorNoUsbMounted': 'USB depolama algılanmadı. Lütfen önce bir USB depolama aygıtı bağlayın.',
	'errorNoM3uUrl': 'Lütfen m3u(8) çalma listeniz için geçerli bir URL girin.',
	'channelLoadError': 'Bu kanal şu anda kullanılamıyor. Lütfen daha sonra tekrar deneyiniz.',
	'channelLoadConnectionFailed': '(Akışa bağlantı başarısız oldu.)',
	'channelNotSupportedFile': 'Bu kanal, uyumsuz bir biçim nedeniyle yüklenemiyor.',
	'errorNoFavouritesYet': 'Henüz favori kanalınız yok. Bir kanalı favorilere eklemek için SARI düğmeye basın.',
	'errorNoPlaylistHistory': 'Henüz geçmişte oynatma listesi yok. Lütfen aşağıdaki alana bir URL girin.',

	// Menu
	'searchPlaceholder': 'Araştırma',
	'allChannels': 'Tüm kanallar',
	'favourites': '⭐ Favoriler',
	'groups': 'Gruplar',
	'channels': 'Kanallar',
	'settings_menu': 'Ayarlar',
	'epg_menu': 'EPG',
	'guide_menu': 'Kılavuz',

	'guideControlsHeadline': 'Kontroller',

	// Advanced Settings
	'tabGeneralSettings': 'Genel Ayarlar',
	'tabAdvancedSettings': 'Gelişmiş Ayarlar',
	'chooseMousewheel': 'Fare tekerleği',
	'volumeSetting': 'Sesi artır/azalt',
	'channelSetting': 'Kanal ileri/geri',
	'reloadPlaylistOnStart': 'Her başlangıçta çalma listesini indir',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'yükleniyor...',
	'audioTrack': 'Ses parçası',
	'subtitleTrack': 'Altyazı parçası',
	'channelSettings': 'Kanal ayarları',
	'channelSettingSubtitle': 'altyazı / ses',
	'channelSettingFavs': 'kanalı favorilere ekle',
	'channelSettingPlayback': 'oynatma kontrollerini göster',
	'channelSettingAudioDefault': 'varsayılan parça',
	'channelSettingSubNoTrack': 'mevcut değil',
	'channelSettingSubOff': 'devre dışı bırak',
	'channelSettingResolution': 'çözünürlük',

	// EPG
	'epgSource': 'EPG kaynağı',
	'usePlaylistEpgUrl': 'Bunun yerine oynatma listenizdeki EPG kaynağı kullanılsın mı?',
	'epgTimeShift': 'EPG Zaman Kayması',
	'epgGrabInterval': 'EPG yakalama aralığı',
	'downloadEpgButton': 'EPG\'yi şimdi indir',
	'noEpgForChannel': 'Bu kanal için EPG yok',
	'noEpgUrlGiven': 'EPG URL\'si ayarlanmadı',
	'epgQuotaExceededError': 'EPG verilerini kaydetmek için yeterli boş alan yok. Lütfen biraz yer açın. Örneğin, kullanılmayan uygulamaları silerek.',
	'epgNotCompatibleWithPlaylist': 'Çalma listeniz bu EGP-URL ile uyumlu değil.',
	'epgIsDownloading': 'EPG yükleniyor ...',
	'epgChannelsProcessed': 'kanallar: ',
	'epgProgramsProcessed': 'programlar: ',
	'epgNow': 'Şimdi',
	'epgAfter': 'Daha sonra',

},
'pl': {
	'yes': 'tak', 'no': 'nie',

	'm3uSource': 'URL do pliku m3u(8)',
	'chooseLang': 'Język',
	'usbLoadLabel': 'Lista odtwarzania z USB',
	'openUsbButton': 'przeglądaj USB',
	'localLoadLabel': 'Lokalny plik m3u(8)',
	'openExplorerButton': 'otwarty eksplorator',
	'openHistoryButton': 'historia',
	'downloadButton': 'załaduj playlistę',
	'saveButton': 'zapisz i graj',
	'deleteButton': 'usuń playlistę',
	'generalSettingsButton': 'Ustawienia główne',
	'advancedSettingsButton': 'zaawansowane',

	'closeAppHint': 'Czy chcesz zamknąć tę aplikację?',
	'hideModalHint': 'Naciśnij dowolny przycisk, aby zamknąć tę wiadomość.',
	'playlistDownloaded': 'Playlista została pomyślnie pobrana.<br>Wczytano %i kanałów.',
	'channelsLoaded': 'kanały',

	'redButtonHint': '<span class="red-button">A</span> Poszukuje',
	'helpHint': 'Naciśnij przycisk <span class="red-button">A</span>, aby wstawić listę kanałów demonstracyjnych.<br><br>W dowolnym momencie naciśnij przycisk INFO na pilocie, aby wyświetlić instrukcję obsługi.',

	'supportContact': 'Aby uzyskać więcej informacji, odwiedź http://iptvacc.rf.gd/pl',
	'supportContactLinked': 'Aby uzyskać więcej informacji, odwiedź <a href="http://iptvacc.rf.gd/pl/" target="_blank">http://iptvacc.rf.gd/pl</a>',
	'donate': 'Jeśli podoba Ci się ta aplikacja, wesprzyj mnie niewielką darowizną.<br>Odwiedź <b class="NOBR">http://iptvacc.rf.gd</b><br>lub za pomocą kodu QR.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (karta kredytowa)',
	'downloadM3uStatus': 'Wczytuję listę odtwarzania. Proszę chwilę poczekać.',
	'usbMountedStatus': 'USB jest zamontowany',

	'connectionLost': 'Utracono połączenie sieciowe. Sprawdź swoją sieć.',
	'checkM3uError': 'Nie udało się wczytać playlisty. Kod statusu HTTP: ',
	'checkM3uFileError': 'Nieprawidłowa lista odtwarzania m3u(8). Proszę sprawdzić plik.',
	'checkM3uDownloadError': 'Nie udało się wczytać playlisty. Sprawdź adres URL.',
	'checkM3uDownloadSizeError': 'Lista odtwarzania zawiera zbyt wiele kanałów. Zmniejsz je do maks. 20.000 kanałów.',
	'checkM3uTimeoutError': 'Przekroczono limit czasu podczas wczytywania listy odtwarzania. Proszę spróbuj ponownie.',
	'errorNoUsbMounted': 'Nie wykryto nośnika USB. Najpierw podłącz urządzenie pamięci USB.',
	'errorNoM3uUrl': 'Wprowadź prawidłowy adres URL do swojej listy odtwarzania m3u(8).',
	'channelLoadError': 'Ten kanał jest obecnie niedostępny. Spróbuj ponownie później.',
	'channelLoadConnectionFailed': '(Nie udało się nawiązać połączenia ze strumieniem.)',
	'channelNotSupportedFile': 'Nie można załadować tego kanału z powodu niezgodnego formatu.',
	'errorNoFavouritesYet': 'Nie masz jeszcze żadnych ulubionych kanałów. Naciśnij ŻÓŁTY przycisk, aby dodać kanał do ulubionych.',
	'errorNoPlaylistHistory': 'Brak playlisty w historii. Proszę wstawić adres URL w polu poniżej.',

	// Menu
	'searchPlaceholder': 'Poszukiwanie',
	'allChannels': 'Wszystkie kanały',
	'favourites': '⭐ Ulubione',
	'groups': 'Grupy',
	'channels': 'Kanały',
	'settings_menu': 'Ustawienia',
	'epg_menu': 'EPG',
	'guide_menu': 'Przewodnik',

	'guideControlsHeadline': 'Controls',

	// Advanced Settings
	'tabGeneralSettings': 'Ustawienia główne',
	'tabAdvancedSettings': 'Zaawansowane ustawienia',
	'chooseMousewheel': 'Kółko w myszce',
	'volumeSetting': 'Zwiększanie/zmniejszanie głośności',
	'channelSetting': 'Przejście do przodu/do tyłu kanału',
	'reloadPlaylistOnStart': 'Pobierz listę odtwarzania przy każdym starcie',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'ładowanie...',
	'audioTrack': 'Ścieżka audio',
	'subtitleTrack': 'Ścieżka napisów',
	'channelSettings': 'Ustawienia kanału',
	'channelSettingSubtitle': 'napisy / dźwięk',
	'channelSettingFavs': 'umieść kanał w ulubionych',
	'channelSettingPlayback': 'pokaż sterowanie odtwarzaniem',
	'channelSettingAudioDefault': 'ścieżka domyślna',
	'channelSettingSubNoTrack': 'niedostępne',
	'channelSettingSubOff': 'wyłącz',
	'channelSettingResolution': 'rozdzielczość',

	// EPG
	'epgSource': 'źródło EPG',
	'usePlaylistEpgUrl': 'Zamiast tego użyć źródła EPG z listy odtwarzania?',
	'epgTimeShift': 'Przesunięcie czasowe EPG',
	'epgGrabInterval': 'Interwał przechwytywania EPG',
	'downloadEpgButton': 'pobierz EPG teraz',
	'noEpgForChannel': 'Brak EPG dla tego kanału',
	'noEpgUrlGiven': 'Nie ustawiono adresu URL EPG',
	'epgQuotaExceededError': 'Za mało wolnego miejsca, aby zapisać dane EPG. Proszę zwolnić trochę miejsca. Na przykład usuwając nieużywane aplikacje.',
	'epgNotCompatibleWithPlaylist': 'Twoja lista odtwarzania nie jest zgodna z tym adresem URL EGP.',
	'epgIsDownloading': 'Ładowanie EPG ...',
	'epgChannelsProcessed': 'kanały: ',
	'epgProgramsProcessed': 'programy: ',
	'epgNow': 'Teraz w tv',
	'epgAfter': 'Po tym',

},
'pt': {
	'yes': 'sim', 'no': 'não',

	'm3uSource': 'URL para arquivo m3u(8)',
	'chooseLang': 'Língua',
	'usbLoadLabel': 'Lista de reprodução de USB',
	'openUsbButton': 'navegar no USB',
	'localLoadLabel': 'Arquivo m3u(8) local',
	'openExplorerButton': 'abra o explorador',
	'openHistoryButton': 'história',
	'downloadButton': 'carregar lista de reprodução',
	'saveButton': 'salve e jogue',
	'deleteButton': 'excluir lista de reprodução',
	'generalSettingsButton': 'Configurações Gerais',
	'advancedSettingsButton': 'avançado',

	'closeAppHint': 'Deseja fechar este aplicativo?',
	'hideModalHint': 'Pressione qualquer botão para fechar esta mensagem.',
	'playlistDownloaded': 'Playlist baixada com sucesso.<br>%i canais carregados.',
	'channelsLoaded': 'canais',

	'redButtonHint': '<span class="red-button">A</span> busca',
	'helpHint': 'Pressione o botão <span class="red-button">A</span> para inserir a lista de canais de demonstração.<br><br>Pressione INFO no controle remoto a qualquer momento para obter um guia do usuário.',

	'supportContact': 'Para mais informações, visite http://iptvacc.rf.gd/pt',
	'supportContactLinked': 'Para mais informações, visite <a href="http://iptvacc.rf.gd/pt/" target="_blank">http://iptvacc.rf.gd/pt</a>',
	'donate': 'Se você gosta deste aplicativo, por favor, apoie-me com uma pequena doação.<br>Visite <b class="NOBR">http://iptvacc.rf.gd</b><br>ou via código QR.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (cartão de crédito)',
	'downloadM3uStatus': 'Carregando lista de reprodução. Por favor espere um momento.',
	'usbMountedStatus': 'USB montado',

	'connectionLost': 'Conexão de rede perdida. Verifique sua rede.',
	'checkM3uError': 'Não foi possível carregar a lista de reprodução. Código de status HTTP: ',
	'checkM3uFileError': 'Não é uma lista de reprodução m3u(8) válida. Verifique o arquivo.',
	'checkM3uDownloadError': 'Não foi possível carregar a lista de reprodução. Verifique o URL.',
	'checkM3uDownloadSizeError': 'A lista de reprodução contém muitos canais. Reduza-os para um máximo de 20.000 canais.',
	'checkM3uTimeoutError': 'Ocorreu um tempo limite ao carregar sua lista de reprodução. Por favor, tente novamente.',
	'errorNoUsbMounted': 'Nenhum armazenamento USB detectado. Conecte primeiro um dispositivo de armazenamento USB.',
	'errorNoM3uUrl': 'Insira um URL válido para sua lista de reprodução m3u(8).',
	'channelLoadError': 'Este canal não está disponível no momento. Por favor, tente novamente mais tarde.',
	'channelLoadConnectionFailed': '(Falha na conexão com o stream.)',
	'channelNotSupportedFile': 'Este canal não pode ser carregado devido a um formato incompatível.',
	'errorNoFavouritesYet': 'Você ainda não tem canais favoritos. Pressione o botão AMARELO para adicionar um canal aos favoritos.',
	'errorNoPlaylistHistory': 'Nenhuma lista de reprodução no histórico ainda. Insira um URL no campo abaixo.',

	// Menu
	'searchPlaceholder': 'Busca',
	'allChannels': 'Todos os canais',
	'favourites': '⭐ Favoritas',
	'groups': 'Grupos',
	'channels': 'Canais',
	'settings_menu': 'Configurações',
	'epg_menu': 'EPG',
	'guide_menu': 'Guia',

	'guideControlsHeadline': 'Controles',

	// Advanced Settings
	'tabGeneralSettings': 'Configurações Gerais',
	'tabAdvancedSettings': 'Configurações avançadas',
	'chooseMousewheel': 'Roda do mouse',
	'volumeSetting': 'Aumentar/diminuir o volume',
	'channelSetting': 'Canal para frente/para trás',
	'reloadPlaylistOnStart': 'Baixar lista de reprodução em cada início',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'carregando...',
	'audioTrack': 'Faixa de áudio',
	'subtitleTrack': 'Faixa de legenda',
	'channelSettings': 'Configurações do canal',
	'channelSettingSubtitle': 'legenda / áudio',
	'channelSettingFavs': 'colocar canal nos favoritos',
	'channelSettingPlayback': 'mostrar controles de reprodução',
	'channelSettingAudioDefault': 'faixa padrão',
	'channelSettingSubNoTrack': 'não disponível',
	'channelSettingSubOff': 'desabilitar',
	'channelSettingResolution': 'resolução',

	// EPG
	'epgSource': 'fonte EPG',
	'usePlaylistEpgUrl': 'Em vez disso, usar a fonte EPG da sua lista de reprodução?',
	'epgTimeShift': 'Timeshift EPG',
	'epgGrabInterval': 'Intervalo de captura de EPG',
	'downloadEpgButton': 'baixar EPG agora',
	'noEpgForChannel': 'Nenhum EPG para este canal',
	'noEpgUrlGiven': 'Nenhum URL EPG definido',
	'epgQuotaExceededError': 'Não há espaço livre suficiente para salvar dados EPG. Por favor, libere algum espaço. Por exemplo, excluindo aplicativos não usados.',
	'epgNotCompatibleWithPlaylist': 'Sua lista de reprodução não é compatível com este EGP-URL.',
	'epgIsDownloading': 'Carregando EPG ...',
	'epgChannelsProcessed': 'canais: ',
	'epgProgramsProcessed': 'programas: ',
	'epgNow': 'Agora',
	'epgAfter': 'Depois disso',

},
'cs': {
	'yes': 'Ano', 'no': 'Ne',

	'm3uSource': 'URL k souboru m3u(8).',
	'chooseLang': 'Jazyk',
	'usbLoadLabel': 'Playlist z USB',
	'openUsbButton': 'procházet USB',
	'localLoadLabel': 'Místní soubor m3u(8).',
	'openExplorerButton': 'otevřít průzkumníka',
	'openHistoryButton': 'Dějiny',
	'downloadButton': 'načíst seznam skladeb',
	'saveButton': 'uložit a hrát',
	'deleteButton': 'smazat seznam skladeb',
	'generalSettingsButton': 'Obecné nastavení',
	'advancedSettingsButton': 'pokročilý',

	'closeAppHint': 'Chcete tuto aplikaci zavřít?',
	'hideModalHint': 'Stisknutím libovolného tlačítka tuto zprávu zavřete.',
	'playlistDownloaded': 'Playlist úspěšně stažen.<br>Načteno %i kanálů.',
	'channelsLoaded': 'kanály',

	'redButtonHint': '<span class="red-button">A</span> hledat',
	'helpHint': 'Stisknutím tlačítka <span class="red-button">A</span> vložíte seznam ukázkových kanálů.<br><br>Stisknutím tlačítka INFO na dálkovém ovladači kdykoli zobrazíte uživatelskou příručku.',

	'supportContact': 'Pro více informací navštivte http://iptvacc.rf.gd/cs',
	'supportContactLinked': 'Pro více informací navštivte <a href="http://iptvacc.rf.gd/cs/" target="_blank">http://iptvacc.rf.gd/cs</a>',
	'donate': 'Pokud se vám tato aplikace líbí, podpořte mě malým darem.<br>Navštivte <b class="NOBR">http://iptvacc.rf.gd</b><br>nebo pomocí QR kódu.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (kreditní karta)',
	'downloadM3uStatus': 'Načítání seznamu skladeb. Prosím, počkej chvíli.',
	'usbMountedStatus': 'připojeno USB',

	'connectionLost': 'Síťové připojení bylo ztraceno. Zkontrolujte prosím svou síť.',
	'checkM3uError': 'Nelze načíst seznam skladeb. Stavový kód HTTP: ',
	'checkM3uFileError': 'Neplatný m3u(8)-playlist. Zkontrolujte soubor.',
	'checkM3uDownloadError': 'Nelze načíst seznam skladeb. Zkontrolujte prosím adresu URL.',
	'checkM3uDownloadSizeError': 'Seznam stop obsahuje příliš mnoho kanálů. Snižte je na max. 20.000 kanálů.',
	'checkM3uTimeoutError': 'Při načítání seznamu skladeb vypršel časový limit. Prosím zkuste to znovu.',
	'errorNoUsbMounted': 'Nebylo zjištěno žádné úložiště USB. Nejprve připojte paměťové zařízení USB.',
	'errorNoM3uUrl': 'Zadejte prosím platnou adresu URL svého seznamu skladeb m3u(8).',
	'channelLoadError': 'Tento kanál není momentálně dostupný. Prosím zkuste to znovu později.',
	'channelLoadConnectionFailed': '(Připojení ke streamu se nezdařilo.)',
	'channelNotSupportedFile': 'Tento kanál nelze načíst kvůli nekompatibilnímu formátu.',
	'errorNoFavouritesYet': 'Zatím nemáte žádné oblíbené kanály. Chcete-li kanál přidat mezi oblíbené, stiskněte ŽLUTÉ tlačítko.',
	'errorNoPlaylistHistory': 'V historii zatím žádný seznam skladeb. Vložte prosím URL do pole níže.',

	// Menu
	'searchPlaceholder': 'Hledání',
	'allChannels': 'Všechny kanály',
	'favourites': '⭐ Oblíbené',
	'groups': 'Skupiny',
	'channels': 'Kanály',
	'settings_menu': 'Nastavení',
	'epg_menu': 'EPG',
	'guide_menu': 'Průvodce',

	'guideControlsHeadline': 'Ovládání',

	// Advanced Settings
	'tabGeneralSettings': 'Obecné nastavení',
	'tabAdvancedSettings': 'Pokročilé nastavení',
	'chooseMousewheel': 'Kolečko myši',
	'volumeSetting': 'Zvýšení/snížení hlasitosti',
	'channelSetting': 'Kanál dopředu/dozadu',
	'reloadPlaylistOnStart': 'Stáhněte si seznam skladeb při každém spuštění',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'načítání...',
	'audioTrack': 'Zvuková stopa',
	'subtitleTrack': 'Stopa s titulky',
	'channelSettings': 'Nastavení kanálu',
	'channelSettingSubtitle': 'titulky / zvuk',
	'channelSettingFavs': 'zařadit kanál do oblíbených',
	'channelSettingPlayback': 'zobrazit ovládací prvky přehrávání',
	'channelSettingAudioDefault': 'výchozí skladba',
	'channelSettingSubNoTrack': 'není k dispozici',
	'channelSettingSubOff': 'zakázat',
	'channelSettingResolution': 'rozlišení',

	// EPG
	'epgSource': 'zdroj EPG',
	'usePlaylistEpgUrl': 'Použít místo toho zdroj EPG ze seznamu skladeb?',
	'epgTimeShift': 'EPG Timeshift',
	'epgGrabInterval': 'Interval zachycení EPG',
	'downloadEpgButton': 'stáhněte si EPG nyní',
	'noEpgForChannel': 'Pro tento kanál není EPG',
	'noEpgUrlGiven': 'Není nastavena žádná adresa URL EPG',
	'epgQuotaExceededError': 'Nedostatek volného místa pro uložení dat EPG. Uvolněte prosím nějaké místo. Například smazáním nepoužívaných aplikací.',
	'epgNotCompatibleWithPlaylist': 'Váš seznam skladeb není kompatibilní s touto adresou URL EGP.',
	'epgIsDownloading': 'Načítání EPG ...',
	'epgChannelsProcessed': 'kanály: ',
	'epgProgramsProcessed': 'programy: ',
	'epgNow': 'Nyní',
	'epgAfter': 'Potom',

},
'ar': {
	'yes': 'نعم', 'no': 'لا',

	'm3uSource': 'URL إلى ملف m3u(8)',
	'chooseLang': 'لغة',
	'usbLoadLabel': 'قائمة تشغيل من USB',
	'openUsbButton': 'تصفح USB',
	'localLoadLabel': 'ملف m3u(8) المحلي',
	'openExplorerButton': 'المستكشف المفتوح',
	'openHistoryButton': 'التاريخ',
	'downloadButton': 'تحميل قائمة التشغيل',
	'saveButton': 'احفظ و العب',
	'deleteButton': 'حذف قائمة التشغيل',
	'generalSettingsButton': 'الاعدادات العامة',
	'advancedSettingsButton': 'الإعدادات المتقدمة',

	'closeAppHint': 'هل تريد إغلاق هذا التطبيق؟',
	'hideModalHint': 'اضغط على أي زر لإغلاق هذه الرسالة.',
	'playlistDownloaded': 'تم تنزيل قائمة التشغيل بنجاح. تم تحميل <br>٪ i من القنوات.',
	'channelsLoaded': 'القنوات',

	'redButtonHint': '<span class="red-button">A</span> البحث',
	'helpHint': 'اضغط على الزر <span class="red-button">A</span> لإدراج قائمة القنوات التجريبية.<br><br>اضغط على INFO أو GUIDE بجهاز التحكم عن بُعد في أي وقت للحصول على دليل المستخدم.',

	'supportContact': 'لمزيد من المعلومات ، يرجى زيارة http://iptvacc.rf.gd/ar',
	'supportContactLinked': 'لمزيد من المعلومات ، يرجى زيارة <a href="http://iptvacc.rf.gd/ar/" target="_blank">http://iptvacc.rf.gd/ar</a>',
	'donate': 'إذا كنت تحب هذا التطبيق ، فالرجاء دعمني بقليل من التبرع. قم بزيارة <b class="NOBR">http://iptvacc.rf.gd</b> أو عبر رمز الاستجابة السريعة',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (credit card)',
	'downloadM3uStatus': 'تحميل قائمة التشغيل. فضلا انتظر لحظة.',
	'usbMountedStatus': 'شنت USB',

	'connectionLost': 'انقطع الاتصال بالشبكة. يرجى التحقق من الشبكة.',
	'checkM3uError': 'تعذر تحميل قائمة التشغيل. كود حالة HTTP: ',
	'checkM3uFileError': 'قائمة تشغيل m3u(8) غير صالحة. يرجى التحقق من الملف.',
	'checkM3uDownloadError': 'تعذر تحميل قائمة التشغيل. يرجى التحقق من URL.',
	'checkM3uDownloadSizeError': 'تحتوي قائمة التشغيل على قنوات كثيرة جدًا. يرجى تقليلها إلى 20.000 قناة كحد أقصى.',
	'checkM3uTimeoutError': 'انتهت المهلة أثناء تحميل قائمة التشغيل الخاصة بك. حاول مرة اخرى.',
	'errorNoUsbMounted': 'لم يتم الكشف عن وحدة تخزين USB. الرجاء توصيل جهاز تخزين USB أولاً.',
	'errorNoM3uUrl': 'الرجاء إدخال عنوان URL صالح لقائمة تشغيل m3u(8) الخاصة بك.',
	'channelLoadError': 'هذه القناة غير متوفرة في الوقت الحالي. الرجاء معاودة المحاولة في وقت لاحق.',
	'channelLoadConnectionFailed': '(فشل الاتصال بالدفق.)',
	'channelNotSupportedFile': 'لا يمكن تحميل هذه القناة بسبب تنسيق غير متوافق.',
	'errorNoFavouritesYet': 'ليس لديك أي قنوات مفضلة حتى الآن. اضغط على الزر الأصفر لتفضيل قناة.',
	'errorNoPlaylistHistory': 'لا توجد قائمة تشغيل في التاريخ حتى الان. الرجاء إدخال عنوان URL في الحقل أدناه.',

	// Menu
	'searchPlaceholder': 'بحث',
	'allChannels': 'جميع القنوات',
	'favourites': '⭐ المفضلة',
	'groups': 'مجموعات',
	'channels': 'القنوات',
	'settings_menu': 'إعدادات',
	'epg_menu': 'دليل البرامج الإلكتروني',
	'guide_menu': 'مرشد',

	'guideControlsHeadline': 'الضوابط',

	// Advanced Settings
	'tabGeneralSettings': 'الاعدادات العامة',
	'tabAdvancedSettings': 'إعدادات متقدمة',
	'chooseMousewheel': 'عجلة الفأرة',
	'volumeSetting': 'رفع الصوت / خفضه',
	'channelSetting': 'قناة إلى الأمام / الخلف',
	'reloadPlaylistOnStart': 'قم بتنزيل قائمة التشغيل في كل بداية',
	'bufferSetting': 'عازلة الفيديو',

	// Channel Settings
	'loading': 'جاري التحميل...',
	'audioTrack': 'مسار صوتي',
	'subtitleTrack': 'مسار الترجمة',
	'channelSettings': 'إعدادات القناة',
	'channelSettingSubtitle': 'العنوان الفرعي / الصوت',
	'channelSettingFavs': 'ضع القناة في المفضلة',
	'channelSettingPlayback': 'إظهار عناصر التحكم في التشغيل',
	'channelSettingAudioDefault': 'المسار الافتراضي',
	'channelSettingSubNoTrack': 'غير متوفر',
	'channelSettingSubOff': 'تعطيل',
	'channelSettingResolution': 'الدقة',

	// EPG
	'epgSource': 'مصدر EPG',
	'usePlaylistEpgUrl': 'استخدم مصدر EPG من قائمة التشغيل الخاصة بك بدلاً من ذلك؟',
	'epgTimeShift': 'EPG Timeshift',
	'epgGrabInterval': 'الفاصل الزمني لسحب EPG',
	'downloadEpgButton': 'قم بتنزيل دليل البرامج الإلكتروني الآن',
	'noEpgForChannel': 'لا يوجد دليل البرامج الإلكتروني لهذه القناة',
	'noEpgUrlGiven': 'لم يتم تعيين عنوان URL لـ EPG',
	'epgQuotaExceededError': 'لا توجد مساحة خالية كافية لحفظ بيانات دليل البرامج الإلكتروني. الرجاء إخلاء بعض المساحة. على سبيل المثال عن طريق حذف التطبيقات غير المستخدمة.',
	'epgNotCompatibleWithPlaylist': 'قائمة التشغيل الخاصة بك غير متوافقة مع عنوان URL هذا.',
	'epgIsDownloading': 'تحميل دليل البرامج الإلكتروني ...',
	'epgChannelsProcessed': 'القنوات: ',
	'epgProgramsProcessed': 'البرامج: ',
	'epgNow': 'الآن',
	'epgAfter': 'بعد ذلك',

},
'fi': {
	'yes': 'joo', 'no': 'ei',

	'm3uSource': 'URL m3u(8)-tiedostoon',
	'chooseLang': 'Kieli',
	'usbLoadLabel': 'Soittolista USB:ltä',
	'openUsbButton': 'selata USB:tä',
	'localLoadLabel': 'Paikallinen m3u(8)-tiedosto',
	'openExplorerButton': 'avoin tutkimusmatkailija',
	'openHistoryButton': 'historia',
	'downloadButton': 'lataa soittolista',
	'saveButton': 'tallenna ja pelaa',
	'deleteButton': 'poista soittolista',
	'generalSettingsButton': 'Yleiset asetukset',
	'advancedSettingsButton': 'Lisäasetukset',

	'closeAppHint': 'Haluatko sulkea tämän sovelluksen?',
	'hideModalHint': 'Sulje tämä viesti painamalla mitä tahansa painiketta.',
	'playlistDownloaded': 'Soittolistan lataus onnistui.<br>%i kanavaa ladattu.',
	'channelsLoaded': 'kanavia',

	'redButtonHint': '<span class="red-button">A</span> etsiä',
	'helpHint': 'Lisää esittelykanavaluettelo painamalla <span class="red-button">A</span>-painiketta.<br><br>Saat käyttöoppaan milloin tahansa painamalla kaukosäätimen INFO-painiketta.',

	'supportContact': 'Lisätietoja on osoitteessa http://iptvacc.rf.gd/fi',
	'supportContactLinked': 'Lisätietoja on osoitteessa <a href="http://iptvacc.rf.gd/fi/" target="_blank">http://iptvacc.rf.gd/fi</a>',
	'donate': 'Jos pidät tästä sovelluksesta, tue minua pienellä lahjoituksella.<br>Käy osoitteessa <b class="NOBR">http://iptvacc.rf.gd</b><br>tai QR-koodin kautta.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (luottokortti)',
	'downloadM3uStatus': 'Ladataan soittolistaa. Odota hetki.',
	'usbMountedStatus': 'USB kiinnitetty',

	'connectionLost': 'Verkkoyhteys katkesi. Tarkista verkkosi.',
	'checkM3uError': 'Soittolistaa ei voitu ladata. HTTP-tilakoodi: ',
	'checkM3uFileError': 'Ei kelvollinen m3u(8)-soittolista. Tarkista tiedosto.',
	'checkM3uDownloadError': 'Soittolistaa ei voitu ladata. Tarkista URL-osoite.',
	'checkM3uDownloadSizeError': 'Soittolista sisältää liian monta kanavaa. Vähennä ne enintään 20.000 kanavaan.',
	'checkM3uTimeoutError': 'Aikakatkaisu tapahtui soittolistaasi ladattaessa. Yritä uudelleen.',
	'errorNoUsbMounted': 'USB-tallennustilaa ei havaittu. Liitä ensin USB-tallennuslaite.',
	'errorNoM3uUrl': 'Anna kelvollinen URL-osoite m3u(8)-soittolistallesi.',
	'channelLoadError': 'Tämä kanava ei ole tällä hetkellä saatavilla. Yritä uudelleen myöhemmin.',
	'channelLoadConnectionFailed': '(Yhteyden muodostaminen streamiin epäonnistui.)',
	'channelNotSupportedFile': 'Tätä kanavaa ei voi ladata, koska muoto ei ole yhteensopiva.',
	'errorNoFavouritesYet': 'Sinulla ei ole vielä suosikkikanavia. Paina KELTAISTA painiketta lisätäksesi kanavan suosikkeihin.',
	'errorNoPlaylistHistory': 'Ei vielä soittolistaa historiassa. Lisää URL-osoite alla olevaan kenttään.',

	// Menu
	'searchPlaceholder': 'Etsintä',
	'allChannels': 'Kaikki kanavat',
	'favourites': '⭐ Suosikit',
	'groups': 'Ryhmät',
	'channels': 'Kanavat',
	'settings_menu': 'Asetukset',
	'epg_menu': 'EPG',
	'guide_menu': 'Opas',

	'guideControlsHeadline': 'Säätimet',

	// Advanced Settings
	'tabGeneralSettings': 'Yleiset asetukset',
	'tabAdvancedSettings': 'Lisäasetukset',
	'chooseMousewheel': 'Hiiren rulla',
	'volumeSetting': 'Äänenvoimakkuus ylös/alas',
	'channelSetting': 'Kanava eteen/taakse',
	'reloadPlaylistOnStart': 'Lataa soittolista jokaisen käynnistyksen yhteydessä',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'ladataan...',
	'audioTrack': 'Ääniraita',
	'subtitleTrack': 'Tekstitysraita',
	'channelSettings': 'Kanavan asetukset',
	'channelSettingSubtitle': 'tekstitys / ääni',
	'channelSettingFavs': 'laita kanava suosikkeihin',
	'channelSettingPlayback': 'näytä toistosäätimet',
	'channelSettingAudioDefault': 'oletusraita',
	'channelSettingSubNoTrack': 'ei saatavilla',
	'channelSettingSubOff': 'poista käytöstä',
	'channelSettingResolution': 'resoluutio',

	// EPG
	'epgSource': 'EPG lähde',
	'usePlaylistEpgUrl': 'Käytätkö sen sijaan EPG-lähdettä soittolistastasi?',
	'epgTimeShift': 'EPG Timeshift',
	'epgGrabInterval': 'EPG-hakuväli',
	'downloadEpgButton': 'lataa EPG nyt',
	'noEpgForChannel': 'Ei EPG:tä tälle kanavalle',
	'noEpgUrlGiven': 'EPG:n URL-osoitetta ei ole asetettu',
	'epgQuotaExceededError': 'Ei tarpeeksi vapaata tilaa EPG-tietojen tallentamiseen. Vapauta tilaa. Esimerkiksi poistamalla käyttämättömät sovellukset.',
	'epgNotCompatibleWithPlaylist': 'Soittolistasi ei ole yhteensopiva tämän EGP-URL-osoitteen kanssa.',
	'epgIsDownloading': 'Ladataan EPG:tä ...',
	'epgChannelsProcessed': 'kanavat: ',
	'epgProgramsProcessed': 'ohjelmat: ',
	'epgNow': 'Nyt',
	'epgAfter': 'Sen jälkeen',

},
'ro': {
	'yes': 'da', 'no': 'nu',

	'm3uSource': 'URL la fișierul m3u(8).',
	'chooseLang': 'Limba',
	'usbLoadLabel': 'Playlist de pe USB',
	'openUsbButton': 'răsfoiește USB',
	'localLoadLabel': 'Fișier m3u(8) local',
	'openExplorerButton': 'deschide exploratorul',
	'openHistoryButton': 'istorie',
	'downloadButton': 'încărcați playlistul',
	'saveButton': 'salvați și jucați',
	'deleteButton': 'șterge lista de redare',
	'generalSettingsButton': 'Setări generale',
	'advancedSettingsButton': 'Setări avansate',

	'closeAppHint': 'Doriți să închideți această aplicație?',
	'hideModalHint': 'Apăsați orice buton pentru a închide acest mesaj.',
	'playlistDownloaded': 'Lista de redare a fost descărcată cu succes.<br>%i canale încărcate.',
	'channelsLoaded': 'canale',

	'redButtonHint': '<span class="red-button">A</span> căutare',
	'helpHint': 'Apăsați butonul <span class="red-button">A</span> pentru a insera lista de canale demonstrative.<br><br>Apăsați în orice moment INFO sau GHID de pe telecomandă pentru un ghid al utilizatorului.',

	'supportContact': 'Pentru mai multe informații, vizitați http://iptvacc.rf.gd/ro',
	'supportContactLinked': 'Pentru mai multe informații, vizitați <a href="http://iptvacc.rf.gd/ro/" target="_blank">http://iptvacc.rf.gd/ro</a>',
	'donate': 'Dacă vă place această aplicație, vă rugăm să mă susțineți cu o mică donație.<br>Vizitați <b class="NOBR">http://iptvacc.rf.gd</b><br>sau prin codul QR.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (Card de credit)',
	'downloadM3uStatus': 'Se încarcă lista de redare. Te rog asteapta un moment.',
	'usbMountedStatus': 'Montat pe USB',

	'connectionLost': 'S-a pierdut conexiunea la rețea. Vă rugăm să vă verificați rețeaua.',
	'checkM3uError': 'Lista de redare nu a putut fi încărcată. Cod de stare HTTP: ',
	'checkM3uFileError': 'Nu este o listă de redare m3u(8) validă. Vă rugăm să verificați fișierul.',
	'checkM3uDownloadError': 'Lista de redare nu a putut fi încărcată. Vă rugăm să verificați adresa URL.',
	'checkM3uDownloadSizeError': 'Lista de redare conține prea multe canale. Vă rugăm să le reduceți la maximum 20.000 de canale.',
	'checkM3uTimeoutError': 'Timeout a avut loc la încărcarea listei de redare. Vă rugăm să încercați din nou.',
	'errorNoUsbMounted': 'Nu a fost detectată niciun spațiu de stocare USB. Conectați mai întâi un dispozitiv de stocare USB.',
	'errorNoM3uUrl': 'Vă rugăm să introduceți o adresă URL validă pentru lista dvs. de redare m3u(8).',
	'channelLoadError': 'Acest canal nu este disponibil momentan. Vă rugăm să încercați din nou mai târziu.',
	'channelLoadConnectionFailed': '(Conexiunea la flux a eșuat.)',
	'channelNotSupportedFile': 'Acest canal nu poate fi încărcat din cauza unui format incompatibil.',
	'errorNoFavouritesYet': 'Nu aveți încă niciun canal preferat. Apăsați butonul GALBEN pentru a favoriza un canal.',
	'errorNoPlaylistHistory': 'Încă nu există playlist în istorie. Vă rugăm să introduceți o adresă URL în câmpul de mai jos.',

	// Menu
	'searchPlaceholder': 'Căutare',
	'allChannels': 'Toate canalele',
	'favourites': '⭐ Favorite',
	'groups': 'Grupuri',
	'channels': 'Canale',
	'settings_menu': 'Setări',
	'epg_menu': 'EPG',
	'guide_menu': 'Ghid',

	'guideControlsHeadline': 'Controale',

	// Advanced Settings
	'tabGeneralSettings': 'Setări generale',
	'tabAdvancedSettings': 'Setări avansate',
	'chooseMousewheel': 'Roata mouse-ului',
	'volumeSetting': 'Volum sus/jos',
	'channelSetting': 'Canal înainte/înapoi',
	'reloadPlaylistOnStart': 'Descărcați lista de redare la fiecare pornire',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'încărcare...',
	'audioTrack': 'Pistă audio',
	'subtitleTrack': 'Pistă de subtitrare',
	'channelSettings': 'Setări canal',
	'channelSettingSubtitle': 'subtitrare / audio',
	'channelSettingFavs': 'pun canalul în favorite',
	'channelSettingPlayback': 'afișează comenzile de redare',
	'channelSettingAudioDefault': 'melodie implicită',
	'channelSettingSubNoTrack': 'nu este disponibil',
	'channelSettingSubOff': 'dezactivare',
	'channelSettingResolution': 'rezoluție',

	// EPG
	'epgSource': 'Sursa EPG',
	'usePlaylistEpgUrl': 'Folosiți în schimb sursa EPG din lista dvs. de redare?',
	'epgTimeShift': 'EPG Timeshift',
	'epgGrabInterval': 'Interval de preluare EPG',
	'downloadEpgButton': 'descărcați EPG acum',
	'noEpgForChannel': 'Nu există EPG pentru acest canal',
	'noEpgUrlGiven': 'Nicio adresă URL EPG setată',
	'epgQuotaExceededError': 'Nu este suficient spațiu liber pentru a salva datele EPG. Vă rugăm să eliberați spațiu. De exemplu, ștergând aplicațiile neutilizate.',
	'epgNotCompatibleWithPlaylist': 'Lista dvs. de redare nu este compatibilă cu această adresă URL EGP.',
	'epgIsDownloading': 'Se încarcă EPG ...',
	'epgChannelsProcessed': 'canale: ',
	'epgProgramsProcessed': 'programe: ',
	'epgNow': 'Acum',
	'epgAfter': 'Dupa aceea',

},
'no': {
	'yes': 'ja', 'no': 'nei',

	'm3uSource': 'URL til m3u(8)-fil',
	'chooseLang': 'Språk',
	'usbLoadLabel': 'Spilleliste fra USB',
	'openUsbButton': 'bla USB',
	'localLoadLabel': 'Lokal m3u(8)-fil',
	'openExplorerButton': 'åpne filutforsker',
	'openHistoryButton': 'historie',
	'downloadButton': 'last spilleliste',
	'saveButton': 'lagre og spill',
	'deleteButton': 'slette spilleliste',
	'generalSettingsButton': 'hovedinnstillinger',
	'advancedSettingsButton': 'avansert',

	'closeAppHint': 'Vil du lukke denne appen?',
	'hideModalHint': 'Trykk på en knapp for å lukke denne meldingen.',
	'playlistDownloaded': 'Spillelisten er lastet ned.<br>%i kanaler er lastet.',
	'channelsLoaded': 'kanaler',

	'redButtonHint': '<span class="red-button">A</span> gjennomsøke',
	'helpHint': 'Trykk på <span class="red-button">A</span>-knappen for å sette inn en demokanalliste.<br><br>Trykk på INFO eller GUIDE på fjernkontrollen når som helst for å få en brukerveiledning.',

	'supportContact': 'For mer informasjon, besøk http://iptvacc.rf.gd/no',
	'supportContactLinked': 'For mer informasjon, besøk <a href="http://iptvacc.rf.gd/no/" target="_blank">http://iptvacc.rf.gd/no</a>',
	'donate': 'Hvis du liker denne appen, vennligst støtte meg med en liten donasjon.<br>Besøk <b class="NOBR">http://iptvacc.rf.gd</b><br>eller via QR-kode.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (kredittkort)',
	'downloadM3uStatus': 'Laster spilleliste. Vennligst vent et øyeblikk.',
	'usbMountedStatus': 'USB-montert',

	'connectionLost': 'Nettverkstilkoblingen ble brutt. Vennligst sjekk nettverket ditt.',
	'checkM3uError': 'Kunne ikke laste inn spillelisten. HTTP-statuskode: ',
	'checkM3uFileError': 'Ikke en gyldig m3u(8)-spilleliste. Vennligst sjekk filen.',
	'checkM3uDownloadError': 'Kunne ikke laste inn spillelisten. Vennligst sjekk URL-en.',
	'checkM3uDownloadSizeError': 'Spillelisten inneholder for mange kanaler. Vennligst reduser dem til maks 20.000 kanaler.',
	'checkM3uTimeoutError': 'Tidsavbrudd oppsto under innlasting av spillelisten. Vær så snill, prøv på nytt.',
	'errorNoUsbMounted': 'Ingen USB-lagring oppdaget. Koble til en USB-lagringsenhet først.',
	'errorNoM3uUrl': 'Vennligst skriv inn en gyldig URL til m3u(8) spillelisten din.',
	'channelLoadError': 'Denne kanalen er ikke tilgjengelig for øyeblikket. Prøv igjen senere.',
	'channelLoadConnectionFailed': '(Tilkobling til strømmen mislyktes.)',
	'channelNotSupportedFile': 'Denne kanalen kan ikke lastes på grunn av et inkompatibelt format.',
	'errorNoFavouritesYet': 'Du har ingen favorittkanaler ennå. Trykk på den GULE knappen for å favoritt en kanal.',
	'errorNoPlaylistHistory': 'Ingen spilleliste i historien ennå. Vennligst skriv inn en URL i feltet nedenfor.',

	// Menu
	'searchPlaceholder': 'Søk',
	'allChannels': 'Alle kanaler',
	'favourites': '⭐ Favoritter',
	'groups': 'Grupper',
	'channels': 'Kanaler',
	'settings_menu': 'Innstillinger',
	'epg_menu': 'EPG',
	'guide_menu': 'Guide',

	'guideControlsHeadline': 'Kontroller',

	// Advanced Settings
	'tabGeneralSettings': 'Generelle innstillinger',
	'tabAdvancedSettings': 'Avanserte innstillinger',
	'chooseMousewheel': 'Mus hjul',
	'volumeSetting': 'Volum opp/ned',
	'channelSetting': 'Kanal fremover/bakover',
	'reloadPlaylistOnStart': 'Last ned spilleliste ved hver start',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'laster...',
	'audioTrack': 'Lydspor',
	'subtitleTrack': 'Undertekstspor',
	'channelSettings': 'Kanalinnstillinger',
	'channelSettingSubtitle': 'undertekst / lyd',
	'channelSettingFavs': 'sett kanal i favoritter',
	'channelSettingPlayback': 'vis avspillingskontroller',
	'channelSettingAudioDefault': 'standardspor',
	'channelSettingSubNoTrack': 'ikke tilgjengelig',
	'channelSettingSubOff': 'deaktiver',
	'channelSettingResolution': 'resolution',

	// EPG
	'epgSource': 'EPG-kilde',
	'usePlaylistEpgUrl': 'Vil du bruke EPG-kilde fra spillelisten din i stedet?',
	'epgTimeShift': 'EPG Timeshift',
	'epgGrabInterval': 'EPG-gripeintervall',
	'downloadEpgButton': 'last ned EPG nå',
	'noEpgForChannel': 'Ingen EPG for denne kanalen',
	'noEpgUrlGiven': 'Ingen EPG URL satt',
	'epgQuotaExceededError': 'Ikke nok ledig plass til å lagre EPG-data. Vennligst frigjør litt plass. For eksempel ved å slette ikke brukte apper.',
	'epgNotCompatibleWithPlaylist': 'Spillelisten din er ikke kompatibel med denne EGP-URL.',
	'epgIsDownloading': 'Laster inn EPG ...',
	'epgChannelsProcessed': 'kanaler: ',
	'epgProgramsProcessed': 'programmer: ',
	'epgNow': 'Nå',
	'epgAfter': 'Etter det',

},
'gr': {
	'yes': 'Ναί', 'no': 'όχι',

	'm3uSource': 'URL στο αρχείο m3u(8).',
	'chooseLang': 'Γλώσσα',
	'usbLoadLabel': 'Λίστα αναπαραγωγής από USB',
	'openUsbButton': 'περιήγηση USB',
	'localLoadLabel': 'Τοπικό αρχείο m3u(8).',
	'openExplorerButton': 'ανοιχτός εξερευνητής',
	'openHistoryButton': 'ιστορία',
	'downloadButton': 'φόρτωση λίστας αναπαραγωγής',
	'saveButton': 'αποθηκεύστε και παίξτε',
	'deleteButton': 'διαγραφή playlist',
	'generalSettingsButton': 'Γενικές Ρυθμίσεις',
	'advancedSettingsButton': 'Προηγμένες Ρυθμίσεις',

	'closeAppHint': 'Θέλετε να κλείσετε αυτήν την εφαρμογή;',
	'hideModalHint': 'Πατήστε οποιοδήποτε κουμπί για να κλείσετε αυτό το μήνυμα.',
	'playlistDownloaded': 'Η λίστα αναπαραγωγής λήφθηκε με επιτυχία.<br>Φορτώθηκαν %i κανάλια.',
	'channelsLoaded': 'κανάλια',

	'redButtonHint': '<span class="red-button">A</span> ψάχνω',
	'helpHint': 'Πατήστε το κουμπί <span class="red-button">A</span>-για να εισαγάγετε τη λίστα καναλιών επίδειξης.<br><br>Πατήστε INFO ή GUIDE στο τηλεχειριστήριο ανά πάσα στιγμή για έναν οδηγό χρήσης.',

	'supportContact': 'Για περισσότερες πληροφορίες, επισκεφτείτε τη διεύθυνση http://iptvacc.rf.gd/gr',
	'supportContactLinked': 'Για περισσότερες πληροφορίες, επισκεφτείτε τη διεύθυνση <a href="http://iptvacc.rf.gd/gr/" target="_blank">http://iptvacc.rf.gd/gr</a>',
	'donate': 'Αν σας αρέσει αυτή η εφαρμογή, υποστηρίξτε με με μια μικρή δωρεά.<br>Επισκεφτείτε τη <b class="NOBR">http://iptvacc.rf.gd</b><br>ή μέσω QR-code.',
	'donatePP': 'PayPal', 'donateKK': 'Stripe (πιστωτική κάρτα)',
	'downloadM3uStatus': 'Φόρτωση λίστας αναπαραγωγής. Παρακαλώ περιμένετε μια στιγμή.',
	'usbMountedStatus': 'Τοποθέτηση USB',

	'connectionLost': 'Η σύνδεση δικτύου χάθηκε. Ελέγξτε το δίκτυό σας.',
	'checkM3uError': 'Δεν ήταν δυνατή η φόρτωση της λίστας αναπαραγωγής. Κωδικός κατάστασης HTTP: ',
	'checkM3uFileError': 'Δεν είναι έγκυρη λίστα αναπαραγωγής m3u(8). Ελέγξτε το αρχείο.',
	'checkM3uDownloadError': 'Δεν ήταν δυνατή η φόρτωση της λίστας αναπαραγωγής. Ελέγξτε τη διεύθυνση URL.',
	'checkM3uDownloadSizeError': 'Η λίστα αναπαραγωγής περιέχει πάρα πολλά κανάλια. Μειώστε τα σε 20.000 κανάλια το πολύ.',
	'checkM3uTimeoutError': 'Παρουσιάστηκε χρονικό όριο κατά τη φόρτωση της λίστας αναπαραγωγής σας. ΠΑΡΑΚΑΛΩ προσπαθησε ξανα.',
	'errorNoUsbMounted': 'Δεν εντοπίστηκε αποθήκευση USB. Συνδέστε πρώτα μια συσκευή αποθήκευσης USB.',
	'errorNoM3uUrl': 'Εισαγάγετε μια έγκυρη διεύθυνση URL στη λίστα αναπαραγωγής m3u(8).',
	'channelLoadError': 'Αυτό το κανάλι δεν είναι διαθέσιμο αυτήν τη στιγμή. Παρακαλώ δοκιμάστε ξανά αργότερα.',
	'channelLoadConnectionFailed': '(Η σύνδεση με τη ροή απέτυχε.)',
	'channelNotSupportedFile': 'Αυτό το κανάλι δεν μπορεί να φορτωθεί λόγω μη συμβατής μορφής.',
	'errorNoFavouritesYet': 'Δεν έχετε ακόμα αγαπημένα κανάλια. Πατήστε το ΚΙΤΡΙΝΟ κουμπί για να αγαπήσετε ένα κανάλι.',
	'errorNoPlaylistHistory': 'Δεν υπάρχει ακόμα λίστα αναπαραγωγής στο ιστορικό. Εισαγάγετε μια διεύθυνση URL στο παρακάτω πεδίο.',

	// Menu
	'searchPlaceholder': 'Αναζήτηση',
	'allChannels': 'Όλα τα κανάλια',
	'favourites': '⭐ Αγαπημένα',
	'groups': 'Ομάδες',
	'channels': 'Κανάλια',
	'settings_menu': 'Ρυθμίσεις',
	'epg_menu': 'EPG',
	'guide_menu': 'Οδηγός',

	'guideControlsHeadline': 'Έλεγχοι',

	// Advanced Settings
	'tabGeneralSettings': 'Γενικές Ρυθμίσεις',
	'tabAdvancedSettings': 'Προηγμένες Ρυθμίσεις',
	'chooseMousewheel': 'Τροχός ποντικιού',
	'volumeSetting': 'Αύξηση/Μείωση έντασης',
	'channelSetting': 'Κανάλι προς τα εμπρός/πίσω',
	'reloadPlaylistOnStart': 'Λήψη λίστας αναπαραγωγής σε κάθε έναρξη',
	'bufferSetting': 'Buffer',

	// Channel Settings
	'loading': 'φόρτωση...',
	'audioTrack': 'Ηχητικό κομμάτι',
	'subtitleTrack': 'Κομμάτι υπότιτλων',
	'channelSettings': 'Ρυθμίσεις καναλιού',
	'channelSettingSubtitle': 'υπότιτλος / ήχος',
	'channelSettingFavs': 'βάλε το κανάλι στα αγαπημένα',
	'channelSettingPlayback': 'εμφάνιση στοιχείων ελέγχου αναπαραγωγής',
	'channelSettingAudioDefault': 'προεπιλεγμένο κομμάτι',
	'channelSettingSubNoTrack': 'μη διαθέσιμο',
	'channelSettingSubOff': 'απενεργοποίηση',
	'channelSettingResolution': 'ανάλυση',

	// EPG
	'epgSource': 'Πηγή EPG',
	'usePlaylistEpgUrl': 'Χρησιμοποιήστε την πηγή EPG από τη λίστα αναπαραγωγής σας;',
	'epgTimeShift': 'EPG Timeshift',
	'epgGrabInterval': 'Διάστημα αρπαγής EPG',
	'downloadEpgButton': 'κατεβάστε το EPG τώρα',
	'noEpgForChannel': 'Δεν υπάρχει EPG για αυτό το κανάλι',
	'noEpgUrlGiven': 'Δεν έχει οριστεί διεύθυνση URL EPG',
	'epgQuotaExceededError': 'Δεν υπάρχει αρκετός ελεύθερος χώρος για την αποθήκευση δεδομένων EPG. Ελευθερώστε λίγο χώρο. Για παράδειγμα, διαγράφοντας μη χρησιμοποιημένες εφαρμογές.',
	'epgNotCompatibleWithPlaylist': 'Η λίστα αναπαραγωγής σας δεν είναι συμβατή με αυτήν τη διεύθυνση EGP-URL.',
	'epgIsDownloading': 'Φόρτωση EPG ...',
	'epgChannelsProcessed': 'κανάλια: ',
	'epgProgramsProcessed': 'προγράμματα: ',
	'epgNow': 'Τώρα',
	'epgAfter': 'Κατόπιν αυτού',

},

};


function isLangAllowed( sLangId ) {

	switch( sLangId ) {
		case 'ar':
		case 'cs':
		case 'de':
		case 'en':
		case 'es':
		case 'fi':
		case 'fr':
		case 'gr':
		case 'it':
		case 'no':
		case 'pl':
		case 'pt':
		case 'ru':
		case 'ro':
		case 'tr':
			return true;
	}

	return false;

}

function setLangId( sLangId ) {
	if( sLangId && isLangAllowed(sLangId) ) {
		localStorage.setItem('sLangId', sLangId);
		applyLang();
	} else {
		console.log('Unknown language: ' + sLangId);
	}
}

function getLangId() {
	var sStoredLang = localStorage.getItem('sLangId');

	if( !sStoredLang ) {
		sStoredLang = getDeviceLang();
		setLangId(sStoredLang);
	}

	if( !isLangAllowed(sStoredLang) ) {
		sStoredLang = 'en';
	}
	return sStoredLang;
}


function getLang( sKey, sForceLangId ) {

	sForceLangId = sForceLangId || false;

	if( sForceLangId ) {
		var sLangId = sForceLangId;
	} else {
		var sLangId = getLangId();
	}

	if( !isLangAllowed(sLangId) ) {
		sLangId = 'en'; // default lang
	}

	var aLang = i18n[sLangId];
	if( aLang ) {
		if( aLang[sKey] ) {
			return aLang[sKey];
		} else if( sLangId !== 'en' ) {
			console.log('Lang fallback: ' + sLangId + ' --- ' + sKey);
			return getLang(sKey, 'en');
		}
	}

	return '';

}

function applyLang() {

	var sLangId = getLangId();
	document.getElementById('sLangId').value = sLangId;

	var aElements = document.querySelectorAll('.i18nInput');
	aElements.forEach(function(oEl) {
		var sLangKey = oEl.dataset.langid;
		if( sLangKey ) {
			var sLangValue = getLang(sLangKey);
			if( sLangValue ) {
				oEl.value = sLangValue;
			}
		}
	});

	aElements = document.querySelectorAll('.i18nPlaceholder');
	aElements.forEach(function(oEl) {
		var sLangKey = oEl.dataset.langid;
		if( sLangKey ) {
			var sLangValue = getLang(sLangKey);
			if( sLangValue ) {
				oEl.placeholder = sLangValue;
			}
		}
	});

	if( sLangId === 'ar' ) {
		document.body.classList.add('rtl');
	} else {
		document.body.classList.remove('rtl');
	}

	aElements = document.querySelectorAll('.i18n');
	aElements.forEach(function(oEl) {
		var sLangKey = oEl.dataset.langid;
		if( sLangKey ) {
			var sLangValue = getLang(sLangKey);
			if( sLangValue ) {
				oEl.innerHTML = sLangValue;
			}
		}
	});

}


function getDeviceLang() {

	try {
		if( sDeviceFamily === 'LG' && window.PalmSystem && window.PalmSystem.country ) {
			var aDeviceCountry = JSON.parse(window.PalmSystem.country);
			if( aDeviceCountry && aDeviceCountry['country'] ) {
				switch( aDeviceCountry['country'] ) {
					case 'CZE':
						return 'cs';
					case 'DEU':
					case 'AUT':
						return 'de';
					case 'ESP':
					case 'MEX':
						return 'es';
					case 'FRA':
						return 'fr';
					case 'FIN':
						return 'fi';
					case 'GRC':
						return 'gr';
					case 'ITA':
						return 'it';
					case 'NOR':
						return 'no';
					case 'POL':
						return 'pl';
					case 'PRT':
						return 'pt';
					case 'RUS':
						return 'ru';
					case 'ROU':
					case 'RUM':
						return 'ro';
					case 'TUR':
						return 'tr';
					default:
						return 'en';
				}
			}
		} else if( window.navigator.language ) {
			var sDeviceLang = window.navigator.language;
			if( sDeviceLang.length == 5 ) {
				sDeviceLang = sDeviceLang.substr(0, 2);
			}

			if( sDeviceLang && isLangAllowed(sDeviceLang) ) {
				return sDeviceLang;
			}
		}
	} catch( e ) { console.log(e.message) }

	return 'en';

}