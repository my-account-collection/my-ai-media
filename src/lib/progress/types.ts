// 学習進捗データの型定義
//
// 現在はローカルのサンプルデータ用に使うが、将来 DynamoDB のアイテム形状や
// Lambda(API)のレスポンス形状としてもそのまま使えるよう、
// プレーンな JSON シリアライズ可能な形にしてある。

/** 理解度（5段階） */
export type UnderstandingLevel = 1 | 2 | 3 | 4 | 5;

export interface ProgressEntry {
	/** DynamoDB のパーティションキー等に転用しやすい一意ID */
	id: string;
	/** 学習日（YYYY-MM-DD） */
	date: string;
	/** 学習テーマ */
	theme: string;
	/** 学習時間（分） */
	durationMinutes: number;
	/** 理解度（1〜5） */
	understanding: UnderstandingLevel;
	/** 次回やること */
	nextAction: string;
}
