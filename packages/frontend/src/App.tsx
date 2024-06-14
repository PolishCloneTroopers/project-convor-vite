import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Navigator from "@/components/navigator"
import { Card } from "@/components/ui/card";
import { ThemeProvider } from "@/components/theme-provider";
import { Hangar } from "@/components/hangar";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigator />,
    children: [
      {
        index: true,
        element: <Hangar />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'members',
        element: <Members />,
      },
      {
        path: 'join',
        element: <Join />,
      },

    ]
  }
])

function App() {

  return (
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
  )
}

function About() {
  return (
    <Card>
      <h1>O nas</h1>
    </Card>
  );
}

function Members() {
  return (
    <Card>
      <h1>Członkowie</h1>
    </Card>
  );
}

function Join() {
  return (
    <Card>
      <h1>Dołącz do nas</h1>
    </Card>
  );
}

export default App
