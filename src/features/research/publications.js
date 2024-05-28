import {
  AngelChang,
  DanielRitchie,
  DavidCharatan,
  HanxiaoJiang,
  KennyJones,
  MaeHeitmann,
  ManolisSavva,
  NiloyMitra,
  PaulGuerrero,
  SiddharthaChaudhuri,
  SoniaRaychaudhuri,
  VladimirKim,
  XianghaoXu,
  VincentSitzmann,
  AndreaTagliasacchi,
  SizheLi,
  CameronSmith,
  AyushTewari,
} from './authors';
import ThumbnailPixelSplat from './thumbnail_pixelsplat.png';
import ThumbnailShapeMOD from './thumbnail_shapemod.jpeg';
import ThumbnailArticulations from './thumbnail_articulations.gif';
import ThumbnailFlowmap from './thumbnail_flowmap.gif';

export const FlowMap = {
  title:
    'FlowMap: High-Quality Camera Poses, Intrinsics, and Depth via Gradient Descent',
  url: 'http://cameronosmith.github.io/flowmap',
  thumbnailSource: ThumbnailFlowmap,
  authors: [CameronSmith, DavidCharatan, AyushTewari, VincentSitzmann],
  numFirstAuthors: 2,
  venue: 'arXiv',
};

export const PixelSplat = {
  title:
    'pixelSplat: 3D Gaussian Splats from Image Pairs for Scalable Generalizable 3D Reconstruction',
  url: 'https://dcharatan.github.io/pixelsplat',
  thumbnailSource: ThumbnailPixelSplat,
  authors: [DavidCharatan, SizheLi, AndreaTagliasacchi, VincentSitzmann],
  venue: 'CVPR 2024 (Oral, Award Candidate)',
};

export const ShapeMOD = {
  title: 'ShapeMOD: Macro Operation Discovery for 3D Shape Programs',
  url: 'https://rkjones4.github.io/shapeMOD.html',
  thumbnailSource: ThumbnailShapeMOD,
  authors: [KennyJones, DavidCharatan, PaulGuerrero, NiloyMitra, DanielRitchie],
  venue: 'SIGGRAPH 2021',
};

export const Articulations = {
  title:
    'Motion Annotation Programs: A Scalable Approach to Annotating Kinematic Articulations in Large 3D Shape Collections',
  url: 'http://visual.cs.brown.edu/projects/articulations-webpage/',
  thumbnailSource: ThumbnailArticulations,
  authors: [
    XianghaoXu,
    DavidCharatan,
    SoniaRaychaudhuri,
    HanxiaoJiang,
    MaeHeitmann,
    VladimirKim,
    SiddharthaChaudhuri,
    ManolisSavva,
    AngelChang,
    DanielRitchie,
  ],
  venue: '3DV 2020',
};

export default [FlowMap, PixelSplat, ShapeMOD, Articulations];
