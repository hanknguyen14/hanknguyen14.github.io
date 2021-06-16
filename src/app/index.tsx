/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';
import { BaseCSS as GridStyle } from 'styled-bootstrap-grid';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from 'styles/theme';
import { ModalProvider } from 'styled-react-modal';

import { HomePage } from './pages/HomePage/Loadable';
import { SkillsPage } from './pages/SkillsPage/Loadable';
import { WorksPage } from './pages/WorksPage/Loadable';
import { ContactPage } from './pages/ContactPage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { SideBar } from './components/SideBar/Loadable';
import { Person } from './components/Person/Loadable';
import { LeftLayout } from './components/LeftLayout/Loadable';
import { RightLayout } from './components/RightLayout/Loadable';
import { MainWrapper } from './components/MainWrapper/Loadable';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - React Boilerplate"
        defaultTitle="React Boilerplate"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A React Boilerplate application" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        ></meta>
      </Helmet>

      <ThemeProvider theme={lightTheme}>
        <ModalProvider>
          <MainWrapper>
            <LeftLayout>
              <SideBar></SideBar>
              <Person></Person>
            </LeftLayout>
            <RightLayout>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/skills" component={SkillsPage} />
                <Route exact path="/works" component={WorksPage} />
                <Route exact path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </RightLayout>
          </MainWrapper>
        </ModalProvider>
        <GlobalStyle />
        <GridStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
