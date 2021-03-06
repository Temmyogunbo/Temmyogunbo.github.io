// For Authentication actions

export const { token } = process.env;

// For categories operations
export const secondcategorySample = {
  category: {
    id: 6,
    title: 'Programming',
    createdAt: '2017-10-14T17:58:13.884Z',
    updatedAt: '2017-10-14T17:58:13.884Z'
  }

};
export const category = {
  id: 6,
  title: 'Programming',
  createdAt: '2017-10-14T17:58:13.884Z',
  updatedAt: '2017-10-14T17:58:13.884Z'
};
export const categoryData = {
  category: 'Programming'
};
export const secondBookSample = {
  id: 7,
  author: "Ogunbo Emmanuel",
  title: "How to get rich in 5 days",
  description: "Don't doubt it. There has been lots of testimonies.",
  imageUrl: "https://res.cloudinary.com/" +
  "emmanuelandela/image/upload/v1512150149/gbqfcbvqpirssqonmafp.jpg",
  imagePublicId: "gbqfcbvqpirssqonmafp",
  category: "Finance",
  quantity: 43,
  createdAt: "2017-12-01T17:42:32.877Z",
  updatedAt: "2017-12-03T11:45:30.303Z"
};
export const signupData = {
  email: 'temmyogunbo@gmail.com',
  userName: 'temmy',
  fullName: 'Emmanuel',
  password: 'emmanuel'
};
export const signinData = {
  userName: 'temmy',
  password: 'emmanuel'
};
export const userPassword = {
  oldPassword: 'emmanuel',
  newPassword: 'emmanuel',
  confirmNewPassword: 'emmanuel'
};
export const userHistory = {
  rows: [
    {
      BookId: 76,
      dueDate: "2017-12-19T22:53:36.404Z",
      borrowedDate: "2017-12-13T22:53:36.404Z",
      returned: false,
      Book: {
        author: "Segun ola",
        title: "Full body transplant"
      }
    }
  ],
  count: 1
};
export const userData = {
  userId: 1,
  currentPage: 1,
  itemsCountPerPage: 5,
  returned: false
};
export const notifications = {
  id: 220,
  notificationType: "BOOK_RETURNED",
  seen: "unread",
  updatedAt: "2017-12-15T17:57:02.351Z",
  Book: {
    author: "Napoleon",
    title: "Laws of power",
    User: { userName: "ojeah" }
  }
};
export const passwordResponse = {};

export const userAuthenticated = {
  isAuthenticated: true,
  user: {
    id: 49,
    role: 'admin',
    username: 'ekundayo'
  }
};

export const userNotAuthenticated = {
  isAuthenticated: false,
  user: {}
};

// For book operations
export const firstBookSample = {
  rows: [{
    id: 6,
    author: "P.N Okeke",
    title: "Engineering Mathematics",
    description: "The moon falls if apples falls. Isaac said so",
    imageUrl: "https://res.cloudinary.com/emmanuelandela/" +
      "image/upload/v1512149777/y1psocziflotgjg2mtvf.jpg",
    imagePublicId: "y1psocziflotgjg2mtvf",
    category: "Engineering",
    quantity: 35,
    createdAt: "2017-12-01T17:37:20.678Z",
    updatedAt: "2017-12-03T12:54:00.084Z"
  },
  {
    id: 7,
    author: "Ogunbo Emmanuel",
    title: "How to get rich in 5 days",
    description: "Don't doubt it. There has been lots of testimonies.",
    imageUrl: "https://res.cloudinary.com/emmanuelandela/" +
      "image/upload/v1512150149/gbqfcbvqpirssqonmafp.jpg",
    imagePublicId: "gbqfcbvqpirssqonmafp",
    category: "Finance",
    quantity: 43,
    createdAt: "2017-12-01T17:42:32.877Z",
    updatedAt: "2017-12-03T11:45:30.303Z"
  }],
  count: 2
};


export const thirdBookData = {
  title: 'Ancient Tips on travelling',
  author: 'O\'Hare',
  description: 'This tips would help you become a better traveller',
  imageUrl: 'https://res.cloudinary.com/dcl7tqhww/image/upload/' +
    'v1510914293/fbuuwg6uqiab9b3rxpvh.jpg',
  st: true,
  quantity: 57,
  category: 'Travels',
  updatedAt: '2017-11-17T10:25:01.852Z',
  createdAt: '2017-11-17T10:25:01.852Z'
};
export const bookData = {
  currentPage: 1,
  itemsCountPerPage: 5,
};
export const secondBookData = {
  currentPage: 1,
  itemsCountPerPage: 5,
  bookCategory: { category: 'History' }
};
export const bookData3 = {
  currentPage: 1,
  itemsCountPerPage: 5,
  bookId: 1
};

export const user = {
  email: 'temmyogunbo@gmail.com',
  userName: 'temmy',
  fullName: 'Emmanuel',
  id: 1,
  role: 'admin',
  membership: 'gold',
  msg: 'You are signed in',

};
export const user2 = {
  email: "dino@gmail.com",
  fullName: "dino",
  userName: "dino",
  membership: "gold",
  msg: 'Registration successful',
  id: 36,
  role: "users",

};


export const books1 = [firstBookSample];

export const booksAfterDeletion = [secondBookSample];
export const booksAfterUpdating = [firstBookSample, thirdBookData];

// For borrowing operations
export const borrow1 = {
  id: 299,
  returned: false,
  dueDate: '2017-11-20T13:21:03.365Z',
  actualReturnDate: '2017-11-17T13:21:03.365Z',
  createdAt: '2017-11-17T13:21:03.365Z',
  updatedAt: '2017-11-17T13:21:03.365Z',
  bookId: 299,
  userId: 49,
  book: {
    id: 299,
    isbn: 9,
    title: 'Gilead',
    author: 'Marilynne Robinson',
    description: 'Gilead is a novel written by Marilynne Robinson',
    image: 'http://res.cloudinary.com/dcl7tqhww/image/upload' +
    '/v1509139554/kf18x2ukcnygh6bau1o2.png',
    status: true,
    quantity: 10,
    category: 'Arts',
    createdAt: '2017-11-17T13:11:15.472Z',
    updatedAt: '2017-11-17T13:21:03.361Z'
  }
};

export const borrow2 = {
  id: 302,
  returned: false,
  dueDate: '2017-11-20T13:21:23.296Z',
  actualReturnDate: '2017-11-17T13:21:23.296Z',
  createdAt: '2017-11-17T13:21:23.296Z',
  updatedAt: '2017-11-17T13:21:23.296Z',
  bookId: 294,
  userId: 49,
  book: {
    id: 294,
    isbn: 4,
    title: 'Wolf Hall',
    author: 'Hilary Mantel',
    description: 'Wolf Hall is a historical novel by English author Hilary',
    image: 'http://res.cloudinary.com/dcl7tqhww/image/upload' +
    '/v1509139539/w9wpuonkyguo32i90mg8.png',
    status: true,
    quantity: 9,
    category: 'Arts',
    createdAt: '2017-11-17T13:11:15.472Z',
    updatedAt: '2017-11-17T13:21:23.293Z'
  }
};

export const borrows1 = [borrow1];
export const borrows2 = [borrow1, borrow2];
export const booksAfterReturning = [borrow2];


export const category2 = {
  id: 8,
  title: 'Sciences',
  createdAt: '2017-10-14T17:58:26.597Z',
  updatedAt: '2017-10-14T17:58:26.597Z'
};

export const category3 = {
  id: 9,
  title: 'Arts',
  createdAt: '2017-10-14T17:58:29.869Z',
  updatedAt: '2017-10-14T17:58:29.869Z'
};

export const categories1 = [secondcategorySample, category2];
export const categories2 = [secondcategorySample, category2, category3];

export const googleDetails = {
  El: '116643864639139228843',
  w3: {
    Eea: '116643864639139228843',
    ig: 'Ekundayo Abiona',
    ofa: 'Ekundayo',
    wea: 'Abiona',
    Paa: 'https://lh5.googleusercontent.com/-vI2PRePGAKU/' +
    'AAAAAAAAAAI/AAAAAAAAAAc/2nvT9UwrvUs/s96-c/photo.jpg',
    U3: 'ekundayo.abiona@andela.com'
  },
  googleId: '116643864639139228843',
  tokenObj: {
    token_type: 'Bearer',
    access_token: 'ya29.GlwHBbqo-6eZvqDOPjKQ89C3pXqx08Nt_vxypcQQaB9KQ' +
    '0HvNFd2_0' +
    'PBh2lZK19xF5rV0YhuyxKWDXbTrImxuwV2BBjXrn255YYFULs7PhhvY23CUHUdYxUqu47IPg',
    id_token: 'defualt872%^&#a!'
  }
};

export const googleUser = {
  token: googleDetails.tokenObj.access_token,
  username: googleDetails.w3.ig.split(' ')[0],
  email: googleDetails.w3.U3,
  role: 'normal',
  password: googleDetails.tokenObj.id_token,
  passwordConfirmation: googleDetails.tokenObj.id_token,
};


export const passData = {
  oldPass: 'pass12#4',
  newPass: 'Olpass12#4',
  newPassConfirm: 'Olpass12#4'
};

// For Book Actions
export const books = [
  {
    id: 6,
    isbn: 6,
    title: 'Gilead01',
    author: 'Marilynne Robinson',
    description: 'Gilead is a novel written by Marilynne Robinson',
    image: 'https://res.cloudinary.com/dcl7tqhww/image/' +
    'upload/v1509139554/kf18x2ukcnygh6bau1o2.png',
    status: true,
    quantity: 11,
    categoryId: 1,
    createdAt: '2017-11-22T15:54:07.464Z',
    updatedAt: '2017-11-22T17:35:37.158Z'
  },
  {
    id: 7,
    isbn: 7,
    title: 'Gilead02',
    author: 'Marilynne Robinson',
    description: 'Gilead is a novel written by Marilynne Robinson',
    image: 'https://res.cloudinary.com/dcl7tqhww/image/' +
    'upload/v1509139554/kf18x2ukcnygh6bau1o2.png',
    status: true,
    quantity: 11,
    categoryId: 1,
    createdAt: '2017-11-22T15:54:07.464Z',
    updatedAt: '2017-11-22T15:54:07.464Z'
  },
];

export const book = {
  id: 7,
  isbn: 7,
  title: 'Gilead02',
  author: 'Marilynne Robinson',
  description: 'Gilead is a novel written by Marilynne Robinson',
  image: 'https://res.cloudinary.com/dcl7tqhww/image/' +
  'upload/v1509139554/kf18x2ukcnygh6bau1o2.png',
  status: true,
  quantity: 11,
  categoryId: 1,
  createdAt: '2017-11-22T15:54:07.464Z',
  updatedAt: '2017-11-22T15:54:07.464Z'
};

// For Borrow Actions
export const borrow = {
  id: 3,
  returned: false,
  dueDate: '2017-11-26T15:29:27.869Z',
  actualReturnDate: '2017-11-23T15:29:27.869Z',
  createdAt: '2017-11-23T15:29:27.870Z',
  updatedAt: '2017-11-23T15:29:27.870Z',
  bookId: 7,
  userId: 1
};

export const borrowedBooks = [
  {
    id: 1,
    returned: true,
    dueDate: '2017-11-25T17:35:25.150Z',
    actualReturnDate: '2017-11-22T17:35:35.612Z',
    createdAt: '2017-11-22T17:35:25.150Z',
    updatedAt: '2017-11-22T17:35:35.613Z',
    bookId: 8,
    userId: 1,
    book: {
      id: 8,
      isbn: 8,
      title: 'Gilead03',
      author: 'Marilynne Robinson',
      description: 'Gilead is a novel written by Marilynne Robinson',
      image: 'https://res.cloudinary.com/dcl7tqhww/image/up' +
      'load/v1509139554/kf18x2ukcnygh6bau1o2.png',
      status: true,
      quantity: 11,
      categoryId: 1,
      createdAt: '2017-11-22T15:54:07.464Z',
      updatedAt: '2017-11-23T17:05:40.930Z'
    }
  },
  {
    id: 2,
    returned: true,
    dueDate: '2017-11-25T17:35:31.973Z',
    actualReturnDate: '2017-11-22T17:35:37.153Z',
    createdAt: '2017-11-22T17:35:31.973Z',
    updatedAt: '2017-11-22T17:35:37.154Z',
    bookId: 6,
    userId: 1,
    book: {
      id: 6,
      isbn: 6,
      title: 'Gilead01',
      author: 'Marilynne Robinson',
      description: 'Gilead is a novel written by Marilynne Robinson',
      image: 'https://res.cloudinary.com/dcl7tqhww/image/' +
      'upload/v1509139554/kf18x2ukcnygh6bau1o2.png',
      status: true,
      quantity: 11,
      categoryId: 1,
      createdAt: '2017-11-22T15:54:07.464Z',
      updatedAt: '2017-11-23T17:05:39.851Z'
    }
  }
];

export const borrowedNotReturnedBooks = [
  {
    id: 1,
    returned: false,
    dueDate: '2017-11-25T17:35:25.150Z',
    actualReturnDate: '2017-11-22T17:35:35.612Z',
    createdAt: '2017-11-22T17:35:25.150Z',
    updatedAt: '2017-11-22T17:35:35.613Z',
    bookId: 8,
    userId: 1,
    book: {
      id: 8,
      isbn: 8,
      title: 'Gilead03',
      author: 'Marilynne Robinson',
      description: 'Gilead is a novel written by Marilynne Robinson',
      image: 'https://res.cloudinary.com/dcl7tqhww/image/up' +
      'load/v1509139554/kf18x2ukcnygh6bau1o2.png',
      status: true,
      quantity: 11,
      categoryId: 1,
      createdAt: '2017-11-22T15:54:07.464Z',
      updatedAt: '2017-11-23T17:05:40.930Z'
    }
  },
  {
    id: 2,
    returned: false,
    dueDate: '2017-11-25T17:35:31.973Z',
    actualReturnDate: '2017-11-22T17:35:37.153Z',
    createdAt: '2017-11-22T17:35:31.973Z',
    updatedAt: '2017-11-22T17:35:37.154Z',
    bookId: 6,
    userId: 1,
    book: {
      id: 6,
      isbn: 6,
      title: 'Gilead01',
      author: 'Marilynne Robinson',
      description: 'Gilead is a novel written by Marilynne Robinson',
      image: 'https://res.cloudinary.com/dcl7tqhww/image/' +
      'upload/v1509139554/kf18x2ukcnygh6bau1o2.png',
      status: true,
      quantity: 11,
      categoryId: 1,
      createdAt: '2017-11-22T15:54:07.464Z',
      updatedAt: '2017-11-23T17:05:39.851Z'
    }
  }
];
