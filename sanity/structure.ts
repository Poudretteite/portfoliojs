import type {StructureResolver} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Portfolio')
    .items([
      orderableDocumentListDeskItem({
        type: 'exhibitionCategory',
        title: 'Wystawy',
        S,
        context,
      }),
      orderableDocumentListDeskItem({
        type: 'projectType',
        title: 'Projekty',
        S,
        context,
      }),
      S.documentTypeListItem('siteSettings').title('Tekst strony'),
      S.documentTypeListItem('gallery').title('Galeria'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['exhibitionCategory', 'projectType', 'siteSettings', 'gallery'].includes(item.getId()!),
      ),
    ])
