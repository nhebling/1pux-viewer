export interface Account {
    attrs: {
        accountName: string;
        avatar: string;
        domain: string;
        email: string;
        name: string;
        uuid: string;
    };
    vaults: Vault[];
}

export interface Vault {
    attrs: {
        avatar: string;
        desc: string;
        name: string;
        type: string;
        uuid: string;
    };
    items: Item[];
}

export interface Item {
    categoryUuid: string;
    createdAt: number;
    favIndex: number;
    state: string;
    updatedAt: number;
    uuid: string;
    details: ItemDetails;
    overview: ItemOverview;
}

export interface ItemOverview {
    subtitle: string;
    title: string;
    url: string;
    urls: {
        label: string;
        url: string;
    }[];
}

export interface ItemDetails {
    loginFields: {
        value: string;
        id: string;
        name: string;
        fieldType: ItemDetailsFieldType;
        designation: string;
    }[];
    notesPlain: string;
    sections: ItemDetailsSection[];
}
export interface ItemDetailsSection {
    title: string;
    name: string;
    fields: SectionFields[];
}
export interface SectionFields {
    title: string;
    id: string;
    value: any;
}

export enum ItemDetailsFieldType {
    T = 'text',
    E = 'email',
    U = 'url',
    N = 'number',
    P = 'password',
    A = 'textarea',
    TEL = 'phone number',
}
