import type { ProgressEntry } from '../lib/progress/types';

// 現状はローカルのサンプルデータを返すだけだが、
// 将来 S3 / DynamoDB / Lambda 経由のデータ取得に置き換えやすいよう
// 非同期関数として用意している（呼び出し側は await するだけで済む）。
//
// 差し替え例（将来）：
//   - DynamoDB から取得する Lambda を Amplify 経由で呼び出し、
//     fetch() でその結果を返すように実装を変えるだけでよい。

const sampleEntries: ProgressEntry[] = [
	{
		id: '1',
		date: '2026-06-20',
		theme: 'Astro入門（ページとレイアウト）',
		durationMinutes: 60,
		understanding: 4,
		nextAction: 'コンポーネント分割の練習をする',
	},
	{
		id: '2',
		date: '2026-06-22',
		theme: 'TypeScriptの型基礎',
		durationMinutes: 45,
		understanding: 3,
		nextAction: 'ジェネリクスをもう一度復習する',
	},
	{
		id: '3',
		date: '2026-06-24',
		theme: 'AWS S3 の基本概念',
		durationMinutes: 30,
		understanding: 2,
		nextAction: 'バケットポリシーについて調べる',
	},
	{
		id: '4',
		date: '2026-06-26',
		theme: 'DynamoDB のテーブル設計',
		durationMinutes: 50,
		understanding: 3,
		nextAction: 'パーティションキーの設計パターンをまとめる',
	},
];

/** 学習進捗エントリの一覧を取得する */
export async function getProgressEntries(): Promise<ProgressEntry[]> {
	return sampleEntries;
}
