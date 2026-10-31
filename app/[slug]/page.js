import {notFound} from 'next/navigation';
import Site from '../site';
export function generateStaticParams(){return ['services','about','prices','reviews','contacts'].map(slug=>({slug}))}
export default async function Page({params}){const {slug}=await params;if(!['services','about','prices','reviews','contacts'].includes(slug))notFound();return <Site page={slug}/>}
