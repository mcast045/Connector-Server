import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from '../routing/PrivateRoute';
import CreateProfile from '../profile-form/CreateProfile';
import EditProfile from '../profile-form/EditProfile';
import AddExperience from '../profile-form/AddExperience';
import AddEducation from '../profile-form/AddEducation';
import Profiles from '../Profiles/profiles';
import Profile from '../Profile/profile';
import Posts from '../Posts/posts';
import Post from '../Post/post';
import NotFound from '../layout/notFound';
import Register from '../auth/register';
import Login from '../auth/login';
import Alert from '../layout/Alert';

const Routes = () => {
    return (
        <section className='container'>
            <Alert />
            <Switch>
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/profiles' component={Profiles} />
                <Route path='/profile/:id' component={Profile} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
                <PrivateRoute path='/create-profile' component={CreateProfile} />
                <PrivateRoute path='/edit-profile' component={EditProfile} />
                <PrivateRoute path='/add-experience' component={AddExperience} />
                <PrivateRoute path='/add-education' component={AddEducation} />
                <PrivateRoute path='/posts' component={Posts} />
                <PrivateRoute path='/post/:id' component={Post} />
                <Route component={NotFound} />
            </Switch>
        </section>

    );
}

export default Routes;