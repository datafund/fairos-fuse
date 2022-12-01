// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {pod} from '../models';
import {handler} from '../models';
import {api} from '../models';

export function Close():Promise<Error>;

export function CreatePod(arg1:string):Promise<pod.Info>;

export function GetCashedPods():Promise<Array<handler.PodMountedInfo>>;

export function GetPodsList():Promise<Array<handler.PodMountedInfo>>;

export function Login(arg1:string,arg2:string):Promise<Error>;

export function Logout():Promise<Error>;

export function Mount(arg1:string,arg2:string,arg3:boolean):Promise<Error>;

export function Start(arg1:api.FairOSConfig):Promise<Error>;

export function Unmount(arg1:string):Promise<Error>;
