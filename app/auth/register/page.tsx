import React from 'react';
import { LazyImport } from '@/utils/dynamicImport';

const Login = LazyImport('SCREENS', 'Register');

export default Login;