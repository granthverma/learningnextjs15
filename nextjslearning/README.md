# Getting Started with Next.js

## Why Next.js?

### What is Next.js?
Next.js is **React with extra powers** that make websites:

- ⚡ Faster  
- 🔍 Better for Google (SEO)  
- 🧱 Easier to build large applications  

### Simple Analogy
- **React** = engine  
- **Next.js** = engine + turbo + GPS + safety  

---

## Why Do We Use Next.js? (Simple Reasons)

### 1️⃣ Problems with Normal React 😵
In a traditional React app:

- Page loads empty first
- JavaScript loads later
- Content appears slowly
- Google sometimes can’t read content properly

❌ Bad for SEO  
❌ Slow first load  

---

### 2️⃣ Next.js Solution ⚡
Next.js improves this by:

- Building pages on the **server**
- Sending **ready-made HTML** to the browser
- Showing content instantly

✅ Fast  
✅ SEO-friendly  
✅ Better user experience  

---

### 3️⃣ Automatic Routing 🚏

**In React:**
- Install `react-router`
- Manually define routes

**In Next.js:**
✅ No router setup  
✅ Clean and simple structure  

---

### 4️⃣ Backend + Frontend Together 🔁
Next.js allows you to:

- Build UI
- Create APIs
- Handle forms
- Implement authentication  

All inside **one project**

❌ No separate backend needed for many apps  

---

### 5️⃣ Better Performance by Default 🚀
Next.js automatically:

- Optimizes images
- Splits code
- Loads only required JavaScript
- Caches pages  

You don’t need heavy configuration — it **just works**.

---

### 6️⃣ Easy Deployment ☁️
- Push your code
- Deploy on Vercel
- Done ✅  


----------------------------------

### Here’s **all Next.js commands 



## 🧾 Next.js Commands

### 📦 Create a New Next.js Project



```bash

npx create-next-app@latest my-app
cd my-app

```


### ▶️ Run Development Server

Starts the app in development mode.

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

📍 Open: **[http://localhost:3000](http://localhost:3000)**

---

### 🏗 Build for Production

Creates an optimized production build.

```bash
npm run build

  ```
       



### ▶️ Start Production Server

Runs the production build (must run build first).

```bash
npm run start
```

---

### 🧹 Stop the Server

Stops the running server.

```bash
Ctrl + C
```

---

### 🧪 Run Linting

Checks code quality and style issues.

```bash
npm run lint
```

---

### 📥 Install Dependencies

Installs all required packages.

```bash
npm install
```

---

### 🔄 Reinstall Dependencies (Fix Issues)

```bash
rm -rf node_modules package-lock.json
npm install
```

---

### 🌱 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

---

### 🧠 Helpful Notes

* `dev` → Development mode (hot reload)
* `build` → Production build
* `start` → Run production build
* `lint` → Code quality check

---

### 🎯 One-Line Summary

```bash
npm run dev → start development
npm run build → build for production
npm run start → run production build

```


## 📁 Next.js Project Structure 

```bash
my-next-app/
├── app/
│   ├── page.tsx        # Home page (/)
│   ├── layout.tsx     # Common layout (Navbar, Footer)
│   └── globals.css    # Global styles
│
├── public/
│   └── favicon.ico    # Static files (images, icons)
│
├── package.json       # Project info & commands
└── README.md          # Project documentation
```

---

## 🧠 Simple Explanation

### 🔹 `app/`

Main folder where **pages live**.

* `page.tsx` → Home page (`/`)
* `layout.tsx` → Wrapper for all pages
* `globals.css` → CSS for whole app

---

### 🔹 `public/`

For **static files**:

* Images
* Icons
* Fonts

Use like:

```jsx
<img src="/logo.png" />
```

---

### 🔹 `package.json`

* Stores dependencies
* Contains commands:

```bash
npm run dev
npm run build
npm run start

```

---

### 🔹 `README.md`

* Project info
* Commands
* Setup instructions

---

## 🎯 One-Line Summary

> **Put pages in `app`, images in `public`, styles in `globals.css`. That’s it.**












No complex setup required.

---

## Project Info

This is a **Next.js** project bootstrapped with  
[`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).




Here’s the **simplest “Hello World” in Next.js** 👇
(no confusion, just the basics)

---

## 🟢 Hello World (Next.js)

### 1️⃣ File location

```text
app/page.tsx
```

### 2️⃣ Code

```tsx
export default function Home() {
  return (
    <h1>Hello World</h1>
  );
}
```

---

### 3️⃣ Run the app

```bash
npm run dev
```

Open 👉 **[http://localhost:3000](http://localhost:3000)**

You’ll see:

## 🎉 Hello World

---

## 🧠 What just happened? (Very simple)

* `page.tsx` → creates `/` route
* Function returns JSX
* Next.js renders it automatically
* No router, no setup

---

### 🎯 One-line takeaway

> **In Next.js, `app/page.tsx` = Home page.**



# React Server Components (RSC) – Simple Explanation 

## React Server Components kya hote hain?

**React Server Components (RSC)** ek naya architecture hai jo:
- React team ne introduce kiya
- Aur Next.js ne use karna start kiya

Is architecture ka main idea hai:
👉 React components ko **2 types** me divide karna

- Server Components  
- Client Components  

---

## 🔹 Server Components

### Server Components kya hote hain?
- By default, **Next.js ke saare components Server Components hote hain**
- Ye components **server par run hote hain**, browser par nahi

### Server Components kya kar sakte hain?
- Database se direct data fetch kar sakte hain
- Files read kar sakte hain
- Secure logic handle kar sakte hain

### Server Components kya NAHI kar sakte?
❌ React hooks use nahi kar sakte (`useState`, `useEffect`)  
❌ User interaction handle nahi kar sakte (click, input, etc.)

### Simple samjho 👇
> Server Components = **data + logic**  
> (jo user ko directly interact nahi karna)

---

## 🔹 Client Components

### Client Components kya hote hain?
- Ye **browser par run hote hain**
- Traditional React components jaise hi hote hain

### Client Component kaise banate hain?
Component file ke top par likhna hota hai:

```js
"use client";
````

### Client Components kya kar sakte hain?

✅ React hooks use kar sakte hain
✅ Button click, form input, events handle kar sakte hain
✅ State manage kar sakte hain

### Client Components kya NAHI kar sakte?

❌ Server-side ka kaam (file read, direct DB access)

### Simple samjho 👇

> Client Components = **UI + interaction**

---

## 🔁 Server vs Client (Simple Table)

| Feature            | Server Component | Client Component              |
| ------------------ | ---------------- | ----------------------------- |
| Run kaha hota hai  | Server par       | Browser par                   |
| Hooks use          | ❌ Nahi           | ✅ Haan                        |
| User interaction   | ❌ Nahi           | ✅ Haan                        |
| Data fetch         | ✅ Haan           | ❌ Direct nahi                 |
| Default in Next.js | ✅ Yes            | ❌ No (`use client` lagta hai) |

---

## 🧠 Important Yaad Rakhne wali Baatein

* Next.js me **default sab Server Components hote hain**
* Interaction chahiye → `"use client"` lagao
* Performance better hoti hai kyunki:

  * Kam JavaScript browser me jata hai
  * Page fast load hota hai

---

## 🎯 One-Line Summary (Interview Ready)

> **Server Components data aur logic ke liye hote hain,
> Client Components UI aur user interaction ke liye.**

---

## ✅ Best Practice

* Zyada se zyada **Server Components use karo**
* Sirf jahan interaction chahiye wahan **Client Components**







# File Based Routing in Next.js

## What is File Based Routing?
File-based routing means **routes are created automatically using folders and files**.  
(👉 Simple samjho: folder ka naam = URL ka path)

---

## Scenario 1: Home Page

**URL**
```

[http://localhost:3000](http://localhost:3000)

```

**File Structure**
```

app/page.tsx

```

**Result**
- Home page render hota hai

👉 `page.tsx` root route (`/`) hota hai

---

## Scenario 2: Multiple Pages

**Folder Structure**
```

app
├── about
│    └── page.tsx
├── profile
│    └── page.tsx
├── layout.tsx
└── page.tsx

```

**URLs**
```

[http://localhost:3000/about](http://localhost:3000/about)     → About Page
[http://localhost:3000/profile](http://localhost:3000/profile)  → Profile Page

````

👉 `about` aur `profile` folder ka naam hi URL ban jata hai

---

## Routing Rules (Important)

1. All routes must be inside the `app` folder  
   👉 Saare pages `app` folder ke andar hone chahiye  

2. Route file name must be `page.js` or `page.tsx`  
   👉 Tabhi Next.js usse route maanta hai  

3. Each folder represents a URL segment  
   👉 Folder ka naam = URL ka part  

When these rules are followed, the route works automatically  
(👉 Koi router install karne ki zarurat nahi)

---

## Example Code (Home Page)

**File:** `app/page.tsx`

```tsx
export default function Home() {
  return <h1>Welcome home!</h1>;
}
````

👉 Ye code `/` route ke liye page render karta hai

---

## One-Line Summary

> Next.js uses folder and file names to create routes automatically.

👉 Folder + `page.tsx` = Route




# Nested Routes in Next.js

## What are Nested Routes?
Nested routes means **routes inside another route**.

👉 In simple words:  
**Parent route ke andar child routes hote hain** (yeh hi nested routes hote hain).

---

## Blog Example (Easy to Visualize)

Assume your website has a **Blog section**:

URLs look like this:
```

/blog
/blog/first
/blog/second

```

👉 `/blog` is the **parent route**  
👉 `/blog/first` and `/blog/second` are **child routes**

---

## Folder Structure Logic (Important)

Rule:
> **Folder inside folder = URL inside URL**

```

app
└── blog
├── page.tsx        → /blog
├── first
│    └── page.tsx  → /blog/first
└── second
└── page.tsx  → /blog/second

```

👉 Har folder URL ka ek part ban jata hai  
👉 `page.tsx` batata hai “yeh ek route hai”

---

## How URLs are formed (Step-by-step)

### `/blog`
- `blog` folder
- `blog/page.tsx`

👉 Blog ka main page

---

### `/blog/first`
- `blog` → parent
- `first` → child

👉 First blog page

---

### `/blog/second`
- `blog` → parent
- `second` → child

👉 Second blog page

---

## Important Points to Remember 🧠

- All routes must be inside the `app` folder  
- Each folder represents a part of the URL  
- Without `page.tsx`, route create nahi hota  

👉 Folder + `page.tsx` = Route

---

## Real-Life Analogy (Quick)

Think of an address:
```

City → Area → House

```

URL bhi waise hi kaam karta hai:
```

/blog/first

```

City = blog  
Area = first  

---

## One-Line Summary

> **Nested routes are created by placing folders inside folders.**

👉 Folder ke andar folder = nested route


---------------------------------------------------------------------------------------
# Dynamic Routes in Next.js 

## What are Dynamic Routes?
Dynamic routes are used when **URL ka ek part fixed nahi hota** and it changes dynamically.

Example:
- `/products/1`
- `/products/2`
- `/products/3`

Yahan `1`, `2`, `3` change ho rahe hain,  
isliye hum **dynamic routes** use karte hain.

---

## Why do we need Dynamic Routes?
Creating a separate page for every product or blog is not practical.

Dynamic routes allow:
- One page
- Multiple dynamic values

Real apps like Amazon, Flipkart, Blogs sab dynamic routes use karti hain.

---

## Create Next.js Project (Command)

```bash
npx create-next-app@latest routing-demo
cd routing-demo
````

---

## Folder Structure (Very Important)

```
app
 └── products
     ├── page.tsx              → /products
     └── [productId]
          └── page.tsx         → /products/1, /products/2
```

* `[productId]` means **dynamic value**
* Square brackets `[ ]` batate hain ki URL ka ye part change ho sakta hai

---

## Create Folders (Command)

```bash
mkdir -p app/products/[productId]
```

---

## URL Mapping (Simple)

| URL           | Meaning           |
| ------------- | ----------------- |
| `/products`   | Product list page |
| `/products/1` | Product 1 details |
| `/products/2` | Product 2 details |

Same file handles all product details pages.

---

## How `params` Work in Dynamic Routes

When you visit:

```
/products/1
```

Next.js automatically sends:

```ts
params = { productId: "1" }
```

URL ka dynamic part = `params.productId`

---

## Product List Page Code

### `app/products/page.tsx`

```tsx
export default function ProductList() {
  return (
    <>
      <h1>Product List</h1>
      <h2>Product 1</h2>
      <h2>Product 2</h2>
      <h2>Product 3</h2>
    </>
  );
}
```

---

## Dynamic Product Details Page (Recommended)

### `app/products/[productId]/page.tsx`

```tsx
type Props = {
  params: {
    productId: string;
  };
};

export default function ProductDetails({ params }: Props) {
  const { productId } = params;

  return (
    <h1>Details about Product {productId}</h1>
  );
}
```

* `params` ke andar URL ka dynamic value aata hai
* `productId` directly access hota hai
* Ye approach most common aur beginner-friendly hai

---

## Async Version (Advanced Use Case)

```tsx
export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;

  return (
    <h1>Details about Product {productId}</h1>
  );
}
```

* `params` ek promise hai
* Isliye `await params` use hota hai
* Mostly advanced scenarios me use hota hai

---

## Run Project Commands

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

---

## Test in Browser

```
http://localhost:3000/products
http://localhost:3000/products/1
http://localhost:3000/products/2
```

---

## Real-Life Analogy

Socho ek building hai:

```
Room 101
Room 102
Room 103
```

Building same hai, room number change hota hai.

Same way:

```
/products/1
/products/2
```

`products` = building
`productId` = room number

---

## One-Line Summary

> **Dynamic routes allow handling multiple dynamic URLs using `[param]` in Next.js.**

`[productId]` = changing value
`params.productId` = uski value
























