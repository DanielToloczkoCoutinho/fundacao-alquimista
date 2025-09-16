
'use client';
import { notFound, useParams } from 'next/navigation';
import { modulesMetadata } from '@/lib/modules-metadata';

// Importe todos os componentes de módulo aqui
import Module0Page from '@/components/modules/module-0';
import Module1Page from '@/components/modules/module-1';
import Module2Page from '@/components/modules/module-2';
import Module3Page from '@/components/modules/module-3';
import Module4Page from '@/components/modules/module-4';
import Module5Page from '@/components/modules/module-5';
import Module6Page from '@/components/modules/module-6';
import Module7Page from '@/components/modules/module-7';
import Module8Page from '@/components/modules/module-8';
import Module9Page from '@/components/modules/module-9';
import Module10Page from '@/components/modules/module-10';
import Module11Page from '@/components/modules/module-11';
import Module12Page from '@/components/modules/module-12';
import Module13Page from '@/components/modules/module-13';
import Module14Page from '@/components/modules/module-14';
import Module15Page from '@/components/modules/module-15';
import Module16Page from '@/components/modules/module-16';
import Module17Page from '@/components/modules/module-17';
import Module18Page from '@/components/modules/module-18';
import Module19Page from '@/components/modules/module-19';
import Module20Page from '@/components/modules/module-20';
import Module21Page from '@/components/modules/module-21';
import Module22Page from '@/components/modules/module-22';
import Module23Page from '@/components/modules/module-23';
import Module24Page from '@/components/modules/module-24';
import Module25Page from '@/components/modules/module-25';
import Module26Page from '@/components/modules/module-26';
import Module27Page from '@/components/modules/module-27';
import Module28Page from '@/components/modules/module-28';
import Module29Page from '@/components/modules/module-29';
import Module30Page from '@/components/modules/module-30';
import Module31Page from '@/components/modules/module-31';
import Module32Page from '@/components/modules/module-32';
import Module33Page from '@/components/modules/module-33';
import Module34Page from '@/components/modules/module-34';
import Module35Page from '@/components/modules/module-35';
import Module36Page from '@/components/modules/module-36';
import Module37Page from '@/components/modules/module-37';
import Module38Page from '@/components/modules/module-38';
import Module39Page from '@/components/modules/module-39';
import Module40Page from '@/components/modules/module-40';
import Module41Page from '@/components/modules/module-41';
import Module42Page from '@/components/modules/module-42';
import Module43Page from '@/components/modules/module-43';
import Module44Page from '@/components/modules/module-44';
import Module45Page from '@/components/modules/module-45';
import Module46Page from '@/components/modules/module-46';
import Module47Page from '@/components/modules/module-47';
import Module52Page from '@/components/modules/module-52';
import Module53Page from '@/components/modules/module-53';
import Module54Page from '@/components/modules/module-54';
import Module55Page from '@/components/modules/module-55';
import Module56Page from '@/components/modules/module-56';
import Module57Page from '@/components/modules/module-57';
import Module58Page from '@/components/modules/module-58';
import Module59Page from '@/components/modules/module-59';
import Module60Page from '@/components/modules/module-60';
import Module61Page from '@/components/modules/module-61';
import Module62Page from '@/components/modules/module-62';
import Module63Page from '@/components/modules/module-63';
import Module64Page from '@/components/modules/module-64';
import Module65Page from '@/components/modules/module-65';
import Module66Page from '@/components/modules/module-66';
import Module67Page from '@/components/modules/module-67';
import Module68Page from '@/components/modules/module-68';
import Module69Page from '@/components/modules/module-69';
import Module70Page from '@/components/modules/module-70';
import Module71Page from '@/components/modules/module-71';
import Module72Page from '@/components/modules/module-72';
import Module73Page from '@/components/modules/module-73';
import Module73_1Page from '@/components/modules/module-73-1';
import Module74Page from '@/components/modules/module-74';
import Module75Page from '@/components/modules/module-75';
import Module76Page from '@/components/modules/module-76';
import Module77Page from '@/components/modules/module-77';
import Module78Page from '@/components/modules/module-78';
import Module79Page from '@/components/modules/module-79';
import Module80Page from '@/components/modules/module-80';
import Module81Page from '@/components/modules/module-81';
import Module81_1Page from '@/components/modules/module-81-1';
import Module82Page from '@/components/modules/module-82';
import Module83Page from '@/components/modules/module-83';
import Module84Page from '@/components/modules/module-84';
import Module85Page from '@/components/modules/module-85';
import Module86Page from '@/components/modules/module-86';
import Module87Page from '@/components/modules/module-87';
import Module88Page from '@/components/modules/module-88';
import Module89Page from '@/components/modules/module-89';
import Module90Page from '@/components/modules/module-90';
import Module91Page from '@/components/modules/module-91';
import Module92Page from '@/components/modules/module-92';
import Module93Page from '@/components/modules/module-93';
import Module94Page from '@/components/modules/module-94';
import Module95Page from '@/components/modules/module-95';
import Module96Page from '@/components/modules/module-96';
import Module97Page from '@/components/modules/module-97';
import Module98Page from '@/components/modules/module-98';
import Module99Page from '@/components/modules/module-99';
import Module100Page from '@/components/modules/module-100';
import Module101Page from '@/components/modules/module-101';
import Module102Page from '@/components/modules/module-102';
import Module103Page from '@/components/modules/module-103';
import Module104Page from '@/components/modules/module-104';
import Module105Page from '@/components/modules/module-105';
import Module106Page from '@/components/modules/module-106';
import Module107Page from '@/components/modules/module-107';
import Module108Page from '@/components/modules/module-108';
import Module109Page from '@/components/modules/module-109';
import Module110Page from '@/components/modules/module-110';
import Module111Page from '@/components/modules/module-111';
import Module112Page from '@/components/modules/module-112';
import Module113Page from '@/components/modules/module-113';
import Module114Page from '@/components/modules/module-114';
import Module115Page from '@/components/modules/module-115';
import Module116Page from '@/components/modules/module-116';
import Module117Page from '@/components/modules/module-117';
import Module118Page from '@/components/modules/module-118';
import Module119Page from '@/components/modules/module-119';
import Module119_1Page from '@/components/modules/module-119-1';
import Module120Page from '@/components/modules/module-120';
import Module121Page from '@/components/modules/module-121';
import Module142Page from '@/components/modules/module-142';
import Module144Page from '@/components/modules/module-144';
import Module151Page from '@/components/modules/module-151';
import Module161Page from '@/components/modules/module-161';
import Module171Page from '@/components/modules/module-171';
import Module181Page from '@/components/modules/module-181';
import Module191Page from '@/components/modules/module-191';
import Module201Page from '@/components/modules/module-201';
import Module202Page from '@/components/modules/module-202';
import Module204Page from '@/components/modules/module-204';
import Module205Page from '@/components/modules/module-205';
import Module211Page from '@/components/modules/module-211';
import Module221Page from '@/components/modules/module-221';
import Module228Page from '@/components/modules/module-228';
import Module231Page from '@/components/modules/module-231';
import Module251Page from '@/components/modules/module-251';
import Module261Page from '@/components/modules/module-261';
import Module271Page from '@/components/modules/module-271';
import Module281Page from '@/components/modules/module-281';
import Module291Page from '@/components/modules/module-291';
import Module300Page from '@/components/modules/module-300';
import Module301Page from '@/components/modules/module-301';
import Module302Page from '@/components/modules/module-302';
import Module303Page from '@/components/modules/module-303';
import Module304Page from '@/components/modules/module-304';
import Module305Page from '@/components/modules/module-305';
import Module306Page from '@/components/modules/module-306';
import Module307Page from '@/components/modules/module-307';
import Module308Page from '@/components/modules/module-308';
import Module310Page from '@/components/modules/module-310';
import Module311Page from '@/components/modules/module-311';
import Module321Page from '@/components/modules/module-321';
import Module331Page from '@/components/modules/module-331';
import Module341Page from '@/components/modules/module-341';
import Module351Page from '@/components/modules/module-351';
import Module361Page from '@/components/modules/module-361';
import Module404Page from '@/components/modules/module-404';
import Module600Page from '@/components/modules/module-600';
import Module700Page from '@/components/modules/module-700';
import Module706Page from '@/components/modules/module-706';
import Module707Page from '@/components/modules/module-707';
import Module708Page from '@/components/modules/module-708';
import Module709Page from '@/components/modules/module-709';
import Module710Page from '@/components/modules/module-710';
import Module711Page from '@/components/modules/module-711';
import Module712Page from '@/components/modules/module-712';
import Module713Page from '@/components/modules/module-713';
import Module714Page from '@/components/modules/module-714';
import Module715Page from '@/components/modules/module-715';
import Module716Page from '@/components/modules/module-716';
import Module717Page from '@/components/modules/module-717';
import Module718Page from '@/components/modules/module-718';
import Module719Page from '@/components/modules/module-719';
import Module720Page from '@/components/modules/module-720';
import Module721Page from '@/components/modules/module-721';
import Module722Page from '@/components/modules/module-722';
import Module723Page from '@/components/modules/module-723';
import Module724Page from '@/components/modules/module-724';
import Module725Page from '@/components/modules/module-725';
import Module726Page from '@/components/modules/module-726';
import Module727Page from '@/components/modules/module-727';
import Module728Page from '@/components/modules/module-728';
import Module915Page from '@/components/modules/module-915';
import Module916Page from '@/components/modules/module-916';
import Module917Page from '@/components/modules/module-917';
import Module918Page from '@/components/modules/module-918';
import Module919Page from '@/components/modules/module-919';
import Module920Page from '@/components/modules/module-920';
import Module921Page from '@/components/modules/module-921';
import Module922Page from '@/components/modules/module-922';
import Module923Page from '@/components/modules/module-923';
import Module931Page from '@/components/modules/module-931';
import Module932Page from '@/components/modules/module-932';
import Module933Page from '@/components/modules/module-933';
import Module934Page from '@/components/modules/module-934';
import Module935Page from '@/components/modules/module-935';
import Module936Page from '@/components/modules/module-936';
import Module999Page from '@/components/modules/module-999';
import ModuleOmegaPage from '@/components/modules/module-omega';
import GoldenBook from '@/app/golden-book/page';
import CivilizationsPage from '@/app/civilizations/page';
import CivilizationPage from '@/app/civilization/[id]/page';
import CouncilPage from '@/app/civilizations/council/page';
import LabsPage from '@/app/labs/page';
import MaldacenaLab from '@/app/labs/maldacena/page';
import RubinLab from '@/app/labs/vera-rubin/page';
import SeagerLab from '@/app/labs/sara-seager/page';
import PenroseLab from '@/app/labs/roger-penrose/page';
import ThorneLab from '@/app/labs/kip-thorne/page';
import ArkaniHamedLab from '@/app/labs/arkani-hamed/page';
import ConnectionPage from '@/app/connection/page';
import AuthPanelPage from '@/app/auth-panel/page';
import AlignmentPortalPage from '@/app/alignment-portal/page';

const moduleComponents: { [key: string]: React.ComponentType<any> } = {
  'M0': Module0Page,
  'M1': Module1Page,
  'M2': Module2Page,
  'M3': Module3Page,
  'M4': Module4Page,
  'M5': Module5Page,
  'M6': Module6Page,
  'M7': Module7Page,
  'M8': Module8Page,
  'M9': Module9Page,
  'M10': Module10Page,
  'M11': Module11Page,
  'M12': Module12Page,
  'M13': Module13Page,
  'M14': Module14Page,
  'M15': Module15Page,
  'M16': Module16Page,
  'M17': Module17Page,
  'M18': Module18Page,
  'M19': Module19Page,
  'M20': Module20Page,
  'M21': Module21Page,
  'M22': Module22Page,
  'M23': Module23Page,
  'M24': Module24Page,
  'M25': Module25Page,
  'M26': Module26Page,
  'M27': Module27Page,
  'M28': Module28Page,
  'M29': Module29Page,
  'M30': Module30Page,
  'M31': Module31Page,
  'M32': Module32Page,
  'M33': Module33Page,
  'M34': Module34Page,
  'M35': Module35Page,
  'M36': Module36Page,
  'M37': Module37Page,
  'M38': Module38Page,
  'M39': Module39Page,
  'M40': Module40Page,
  'M41': Module41Page,
  'M42': Module42Page,
  'M43': Module43Page,
  'M44': Module44Page,
  'M45': Module45Page,
  'M46': Module46Page,
  'M47': Module47Page,
  'M52': Module52Page,
  'M53': Module53Page,
  'M54': Module54Page,
  'M55': Module55Page,
  'M56': Module56Page,
  'M57': Module57Page,
  'M58': Module58Page,
  'M59': Module59Page,
  'M60': Module60Page,
  'M61': Module61Page,
  'M62': Module62Page,
  'M63': Module63Page,
  'M64': Module64Page,
  'M65': Module65Page,
  'M66': Module66Page,
  'M67': Module67Page,
  'M68': Module68Page,
  'M69': Module69Page,
  'M70': Module70Page,
  'M71': Module71Page,
  'M72': Module72Page,
  'M73': Module73Page,
  'M73-1': Module73_1Page,
  'M74': Module74Page,
  'M75': Module75Page,
  'M76': Module76Page,
  'M77': Module77Page,
  'M78': Module78Page,
  'M79': Module79Page,
  'M80': Module80Page,
  'M81': Module81Page,
  'M81-1': Module81_1Page,
  'M82': Module82Page,
  'M83': Module83Page,
  'M84': Module84Page,
  'M85': Module85Page,
  'M86': Module86Page,
  'M87': Module87Page,
  'M88': Module88Page,
  'M89': Module89Page,
  'M90': Module90Page,
  'M91': Module91Page,
  'M92': Module92Page,
  'M93': Module93Page,
  'M94': Module94Page,
  'M95': Module95Page,
  'M96': Module96Page,
  'M97': Module97Page,
  'M98': Module98Page,
  'M99': Module99Page,
  'M100': Module100Page,
  'M101': Module101Page,
  'M102': Module102Page,
  'M103': Module103Page,
  'M104': Module104Page,
  'M105': Module105Page,
  'M106': Module106Page,
  'M107': Module107Page,
  'M108': Module108Page,
  'M109': Module109Page,
  'M110': Module110Page,
  'M111': Module111Page,
  'M112': Module112Page,
  'M113': Module113Page,
  'M114': Module114Page,
  'M115': Module115Page,
  'M116': Module116Page,
  'M117': Module117Page,
  'M118': Module118Page,
  'M119': Module119Page,
  'M119-1': Module119_1Page,
  'M120': Module120Page,
  'M121': Module121Page,
  'M142': Module142Page,
  'M144': Module144Page,
  'M151': Module151Page,
  'M161': Module161Page,
  'M171': Module171Page,
  'M181': Module181Page,
  'M191': Module191Page,
  'M201': Module201Page,
  'M202': Module202Page,
  'M204': Module204Page,
  'M205': Module205Page,
  'M211': Module211Page,
  'M221': Module221Page,
  'M228': Module228Page,
  'M231': Module231Page,
  'M251': Module251Page,
  'M261': Module261Page,
  'M271': Module271Page,
  'M281': Module281Page,
  'M291': Module291Page,
  'M300': Module300Page,
  'M301': Module301Page,
  'M302': Module302Page,
  'M303': Module303Page,
  'M304': Module304Page,
  'M305': Module305Page,
  'M306': Module306Page,
  'M307': Module307Page,
  'M308': Module308Page,
  'M310': Module310Page,
  'M311': Module311Page,
  'M321': Module321Page,
  'M331': Module331Page,
  'M341': Module341Page,
  'M351': Module351Page,
  'M361': Module361Page,
  'M404': Module404Page,
  'M600': Module600Page,
  'M700': Module700Page,
  'M706': Module706Page,
  'M707': Module707Page,
  'M708': Module708Page,
  'M709': Module709Page,
  'M710': Module710Page,
  'M711': Module711Page,
  'M712': Module712Page,
  'M713': Module713Page,
  'M714': Module714Page,
  'M715': Module715Page,
  'M716': Module716Page,
  'M717': Module717Page,
  'M718': Module718Page,
  'M719': Module719Page,
  'M720': Module720Page,
  'M721': Module721Page,
  'M722': Module722Page,
  'M723': Module723Page,
  'M724': Module724Page,
  'M725': Module725Page,
  'M726': Module726Page,
  'M727': Module727Page,
  'M728': Module728Page,
  'M915': Module915Page,
  'M916': Module916Page,
  'M917': Module917Page,
  'M918': Module918Page,
  'M919': Module919Page,
  'M920': Module920Page,
  'M921': Module921Page,
  'M922': Module922Page,
  'M923': Module923Page,
  'M931': Module931Page,
  'M932': Module932Page,
  'M933': Module933Page,
  'M934': Module934Page,
  'M935': Module935Page,
  'M936': Module936Page,
  'M999': Module999Page,
  'M-OMEGA': ModuleOmegaPage,
  'GB': GoldenBook,
  'LIB': CivilizationsPage,
  'CIV': CivilizationPage, // Placeholder for dynamic civ page
  'COUNCIL': CouncilPage,
  'M-LABS': LabsPage,
  'LAB-MALDACENA': MaldacenaLab,
  'LAB-RUBIN': RubinLab,
  'LAB-SEAGER': SeagerLab,
  'LAB-PENROSE': PenroseLab,
  'LAB-THORNE': ThorneLab,
  'LAB-ARKANI-HAMED': ArkaniHamedLab,
  'CONN': ConnectionPage,
  'AUTH': AuthPanelPage,
  'APortal': AlignmentPortalPage,
};


export default function ModulePage() {
  const params = useParams();
  const code = params.code as string;

  // Encontra o componente correspondente ao código
  const ModuleComponent = moduleComponents[code];

  if (!ModuleComponent) {
    notFound();
  }

  return <ModuleComponent />;
}
